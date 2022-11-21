<?php

namespace Drupal\bjc_common\Plugin\Block;

/**
 * @file
 * Contains \Drupal\bjc_common\Plugin\Block\CopyrightFooter.
 */

use Drupal\Core\Block\BlockBase;

/**
 * Copyright Footer module for Block.
 *
 * @Block (
 *   id = "copyright_footer",
 *   admin_label = @Translation("Copyright Footer"),
 *   category = @Translation("Custom")
 * )
 */
class CopyrightFooter extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#markup' => $this->t("© Copyright " . date("Y") . " All Rights Reserved."),
    ];
  }


}
