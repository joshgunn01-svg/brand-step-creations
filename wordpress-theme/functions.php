<?php
/**
 * Theme bootstrap for CustomCharm One Page (minimal)
 */

// Theme setup
add_action('after_setup_theme', function () {
  add_theme_support('title-tag');
  add_theme_support('html5', ['search-form','gallery','caption','style','script']);
});

// Enqueue main stylesheet
add_action('wp_enqueue_scripts', function () {
  $ver = wp_get_theme()->get('Version');
  wp_enqueue_style('customcharm-style', get_stylesheet_uri(), [], $ver);
});

