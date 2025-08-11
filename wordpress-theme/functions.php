<?php
/**
 * Theme functions for CustomCharm One Page
 */

// Theme setup
add_action('after_setup_theme', function () {
  add_theme_support('title-tag');
  add_theme_support('custom-logo');
  add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
  register_nav_menus([
    'primary' => __('Primary Menu', 'customcharm-onepage'),
  ]);
});

// Enqueue styles and scripts
add_action('wp_enqueue_scripts', function () {
  $ver = wp_get_theme()->get('Version');
  wp_enqueue_style('customcharm-style', get_stylesheet_uri(), [], $ver);

  $js_path = get_template_directory() . '/assets/js/onepage.js';
  $js_uri  = get_template_directory_uri() . '/assets/js/onepage.js';
  if (file_exists($js_path)) {
    wp_enqueue_script('customcharm-onepage', $js_uri, [], filemtime($js_path), true);
  }
});

// Customizer settings
add_action('customize_register', function ($wp_customize) {
  // Hero
  $wp_customize->add_section('cc_hero', [
    'title'    => __('Hero', 'customcharm-onepage'),
    'priority' => 10,
  ]);
  $wp_customize->add_setting('cc_hero_title', [
    'default'           => __('Custom Shoe Charms for Your Brand', 'customcharm-onepage'),
    'sanitize_callback' => 'sanitize_text_field',
  ]);
  $wp_customize->add_control('cc_hero_title', [
    'label'   => __('Headline', 'customcharm-onepage'),
    'section' => 'cc_hero',
    'type'    => 'text',
  ]);
  $wp_customize->add_setting('cc_hero_subtitle', [
    'default'           => __('Premium, durable charms to boost brand awareness and delight your audience.', 'customcharm-onepage'),
    'sanitize_callback' => 'wp_kses_post',
  ]);
  $wp_customize->add_control('cc_hero_subtitle', [
    'label'   => __('Subheadline', 'customcharm-onepage'),
    'section' => 'cc_hero',
    'type'    => 'textarea',
  ]);
  $wp_customize->add_setting('cc_hero_cta_text', [
    'default'           => __('Request Free Mockup', 'customcharm-onepage'),
    'sanitize_callback' => 'sanitize_text_field',
  ]);
  $wp_customize->add_control('cc_hero_cta_text', [
    'label'   => __('CTA Text', 'customcharm-onepage'),
    'section' => 'cc_hero',
    'type'    => 'text',
  ]);
  $wp_customize->add_setting('cc_hero_cta_url', [
    'default'           => '#contact',
    'sanitize_callback' => 'esc_url_raw',
  ]);
  $wp_customize->add_control('cc_hero_cta_url', [
    'label'   => __('CTA URL', 'customcharm-onepage'),
    'section' => 'cc_hero',
    'type'    => 'url',
  ]);

  // About
  $wp_customize->add_section('cc_about', [
    'title'    => __('About', 'customcharm-onepage'),
    'priority' => 20,
  ]);
  $wp_customize->add_setting('cc_about_text', [
    'default'           => __('We craft high-quality custom shoe charms tailored to your brand. Low MOQs, fast lead times, and design support included.', 'customcharm-onepage'),
    'sanitize_callback' => 'wp_kses_post',
  ]);
  $wp_customize->add_control('cc_about_text', [
    'label'   => __('About Text', 'customcharm-onepage'),
    'section' => 'cc_about',
    'type'    => 'textarea',
  ]);

  // Features
  $wp_customize->add_section('cc_features', [
    'title'    => __('Features', 'customcharm-onepage'),
    'priority' => 30,
  ]);
  for ($i = 1; $i <= 3; $i++) {
    $wp_customize->add_setting("cc_feature_{$i}", [
      'default'           => sprintf(__('Feature %d description', 'customcharm-onepage'), $i),
      'sanitize_callback' => 'sanitize_text_field',
    ]);
    $wp_customize->add_control("cc_feature_{$i}", [
      'label'   => sprintf(__('Feature %d', 'customcharm-onepage'), $i),
      'section' => 'cc_features',
      'type'    => 'text',
    ]);
  }

  // Pricing
  $wp_customize->add_section('cc_pricing', [
    'title'    => __('Pricing', 'customcharm-onepage'),
    'priority' => 40,
  ]);
  $wp_customize->add_setting('cc_pricing_text', [
    'default'           => __('Transparent pricing with volume discounts. Get in touch for a tailored quote.', 'customcharm-onepage'),
    'sanitize_callback' => 'wp_kses_post',
  ]);
  $wp_customize->add_control('cc_pricing_text', [
    'label'   => __('Pricing Text', 'customcharm-onepage'),
    'section' => 'cc_pricing',
    'type'    => 'textarea',
  ]);

  // Contact
  $wp_customize->add_section('cc_contact', [
    'title'    => __('Contact', 'customcharm-onepage'),
    'priority' => 50,
  ]);
  $wp_customize->add_setting('cc_contact_email', [
    'default'           => 'hello@example.com',
    'sanitize_callback' => 'sanitize_email',
  ]);
  $wp_customize->add_control('cc_contact_email', [
    'label'   => __('Contact Email', 'customcharm-onepage'),
    'section' => 'cc_contact',
    'type'    => 'email',
  ]);
  $wp_customize->add_setting('cc_contact_phone', [
    'default'           => '+1 (555) 123-4567',
    'sanitize_callback' => 'sanitize_text_field',
  ]);
  $wp_customize->add_control('cc_contact_phone', [
    'label'   => __('Contact Phone', 'customcharm-onepage'),
    'section' => 'cc_contact',
    'type'    => 'text',
  ]);
});
