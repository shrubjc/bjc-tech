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
 *   id = "slideshowhomepageblock",
 *   admin_label = @Translation("SlideShow Home Page Block"),
 *   category = @Translation("Custom")
 * )
 */
class SlideShowBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

    $result = views_embed_view('home_page_slideshow', 'block_1');
    return $result;
  }


}
