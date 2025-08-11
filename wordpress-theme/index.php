<?php
/**
 * Index template – fallback. Front page is handled by front-page.php.
 */
get_header();
?>
<main id="content" class="container" role="main">
  <?php if (is_front_page()) : ?>
    <?php /* Load front-page template explicitly if needed */ ?>
    <?php locate_template('front-page.php', true); ?>
  <?php else: ?>
    <section class="section">
      <h2><?php bloginfo('name'); ?></h2>
      <p><?php bloginfo('description'); ?></p>
      <p>This is a one-page theme. Set your homepage to "A static page" under Settings → Reading to use the Front Page template.</p>
    </section>
  <?php endif; ?>
</main>
<?php get_footer(); ?>
