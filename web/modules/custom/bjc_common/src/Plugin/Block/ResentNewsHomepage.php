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
 *   id = "resentnewshomepageblock",
 *   admin_label = @Translation("Recent News Home Page Block"),
 *   category = @Translation("Custom")
 * )
 */
class ResentNewsHomepage extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $result = views_embed_view('recent_post_news', 'block_1');
    $result2 = views_embed_view('recent_post_news', 'block_2');
    $content['#markup'] = render($result).render($result2);
    return $content;
  }


}
