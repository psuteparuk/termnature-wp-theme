<?php

$media = get_attached_media('image');
$cover = $media[0];

add_action('beans_header_after_markup', 'termnature_add_cover_image');
function termnature_add_cover_image() {
  echo beans_open_markup('termnature_cover', 'div', array(
    'class' => 'uk-cover-container uk-height-medium'
  ));
    echo beans_open_markup('termnature_cover_image', 'img', array(
      'src' => wp_get_attachment_url($cover->ID),
      'alt' => get_post_meta($cover->ID, '_wp_attachment_image_alt', true),
      'uk-cover'
    ));
    echo beans_close_markup('termnature_cover_image');
  echo beans_close_markup('termnature_cover');
}

// Load Beans document.
beans_load_document();
