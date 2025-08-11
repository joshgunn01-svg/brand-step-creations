<?php
/** Header */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="<?php echo esc_url( home_url('/') ); ?>" />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<a class="screen-reader-text" href="#content">Skip to content</a>
<header class="site-header">
  <div class="container" style="display:flex;align-items:center;justify-content:space-between;gap:1rem;">
    <div class="site-brand">
      <?php if (function_exists('the_custom_logo')) { the_custom_logo(); } ?>
      <a href="<?php echo esc_url( home_url('/') ); ?>" class="site-title" rel="home"><?php bloginfo('name'); ?></a>
    </div>
    <nav class="nav" aria-label="Primary">
      <?php
      wp_nav_menu([
        'theme_location' => 'primary',
        'container'      => false,
        'fallback_cb'    => false,
        'items_wrap'     => '<ul id="primary-menu" class="menu" style="display:flex;gap:.5rem;list-style:none;margin:0;padding:0;">%3$s</ul>',
        'link_before'    => '',
        'link_after'     => '',
      ]);
      ?>
      <?php // Fallback if no menu assigned: show anchor links ?>
      <?php if (!has_nav_menu('primary')): ?>
        <ul class="menu" style="display:flex;gap:.5rem;list-style:none;margin:0;padding:0;">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      <?php endif; ?>
    </nav>
  </div>
</header>
