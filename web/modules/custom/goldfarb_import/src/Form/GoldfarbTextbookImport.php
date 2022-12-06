<?php
/**
 * @file
 * Contains \Drupal\goldfarb_import\Form\GoldfarbTextbookImport.
 */

namespace Drupal\goldfarb_import\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\file\Entity\File;

/**
 * Implements the GoldfarbImport form controller.
 *
 * @see \Drupal\Core\Form\FormBase
 */
class GoldfarbTextbookImport extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'goldfarb_import_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    // Use in translation context.
    $context = array('context' => GOLDFARB_IMPORT_TRANSLATE_CONTEXT);

    $form['description'] = array(
      '#markup' => t('Use this form to upload a CSV file of Data'),
    );

    $form['import_type'] = array (
      '#type' => 'select',
      '#title' => t('Select to import'),
      '#required' => TRUE,
      '#options' => array (
        TEXTBOOKS_CONTENT_TYPE => 'Textbooks',
        RESOURCE_CONTENT_TYPE => 'Resource',
        ACADEMIC_EVENTS_CONTENT_TYPE => 'Academic Events',
        EVENTS_CONTENT_TYPE => 'Events',
        FACULTY_STAFF_CONTENT_TYPE => 'Faculty Staff',
        POSTS_CONTENT_TYPE => 'Posts',
      ),
    );

    $max_size = ini_get('upload_max_filesize');
    $description = 'Due to server restrictions, the <strong>maximum upload file size is ' .$max_size. '</strong>. Files that exceed this size will be disregarded.';

    $form['csvfile'] = array(
      '#type' => 'managed_file',
      '#title' => t('Upload file'),
      '#upload_location' => 'public://import/',
      '#default_value' => '',
      '#required' => TRUE,
      '#upload_validators'  => array("file_validate_extensions" => array("csv")),
      '#description' => $max_size ? t($description, $context) : '',
    );

    $form['actions']['#type'] = 'actions';

    $form['actions']['submit'] = array(
      '#type' => 'submit',
      '#value' => $this->t('Upload CSV'),
      '#button_type' => 'primary',
    );

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Used in translation context.
    $context = array('context' => GOLDFARB_IMPORT_TRANSLATE_CONTEXT);

    $type = $form_state->getValue('import_type');
    /* Fetch the array of the file stored temporarily in database */
    $csv_file = $form_state->getValue('csvfile');
    $batch = [];
    if ($type != '' && !empty($csv_file)) {
      /* Load the object of the file by it's fid */
      $file = File::load( $csv_file[0] );
      /* Set the status flag permanent of the file object */
      $file->setPermanent();
      /* Save the file in database */
      $file->save();
      $fp = fopen($file->getFileUri(), 'r');
      while (($import_row = fgetcsv($fp, GOLDFARB_DATA_IMPORT_UPDATE_CSV_ROW_LENGTH, ",")) !== FALSE) {
        $data[] = $import_row;
      }
      if (!empty($data)) {
        array_shift($data);
      }
      if ($type == TEXTBOOKS_CONTENT_TYPE) {
        $operations = [];
        foreach (array_chunk($data, GOLDFARB_DATA_IMPORT_BATCH_SIZE) as $smaller_batch_data) {
          $operations[] = ['importTextbooksContentItem', [$smaller_batch_data]];
        }
      } elseif ($type == RESOURCE_CONTENT_TYPE) {
        $operations = [];
        foreach (array_chunk($data, GOLDFARB_DATA_IMPORT_BATCH_SIZE) as $smaller_batch_data) {
          $operations[] = ['importResourceContentItem', [$smaller_batch_data]];
        }
      } elseif ($type == ACADEMIC_EVENTS_CONTENT_TYPE) {
        $operations = [];
        foreach (array_chunk($data, GOLDFARB_DATA_IMPORT_BATCH_SIZE) as $smaller_batch_data) {
          $operations[] = ['importAcademicContentItem', [$smaller_batch_data]];
        }
      } elseif ($type == EVENTS_CONTENT_TYPE) {
        $operations = [];
        foreach (array_chunk($data, GOLDFARB_DATA_IMPORT_BATCH_SIZE) as $smaller_batch_data) {
          $operations[] = ['importEventsContentItem', [$smaller_batch_data]];
        }
      } elseif ($type == FACULTY_STAFF_CONTENT_TYPE) {
        $operations = [];
        foreach (array_chunk($data, GOLDFARB_DATA_IMPORT_BATCH_SIZE) as $smaller_batch_data) {
          $operations[] = ['importFacultyStaffContentItem', [$smaller_batch_data]];
        }
      } elseif ($type == POSTS_CONTENT_TYPE) {
        $operations = [];
        foreach (array_chunk($data, GOLDFARB_DATA_IMPORT_BATCH_SIZE) as $smaller_batch_data) {
          $operations[] = ['importPostsContentItem', [$smaller_batch_data]];
        }
      }
      // Initializing the batch.
      $batch = array(
        'title' => t('Importing Data...'),
        'operations' => $operations,
        'init_message' => t('Import is starting...', array(), $context),
        'progress_message' => t('Processed @current out of @total.', array(), $context),
        'error_message' => t('Import has encountered an error.'),
        'finished' => 'importContentItemCallback',
      );
    }
    // Setting the batch.
    batch_set($batch);
  }

}
