<?php
/** Front Page Template */
?>
<section id="hero" class="hero">
  <div class="container">
    <h1><?php echo esc_html( get_theme_mod('cc_hero_title') ); ?></h1>
    <p><?php echo wp_kses_post( get_theme_mod('cc_hero_subtitle') ); ?></p>
    <?php if ($cta = get_theme_mod('cc_hero_cta_text')): ?>
      <p><a class="btn" href="<?php echo esc_url( get_theme_mod('cc_hero_cta_url', '#contact') ); ?>"><?php echo esc_html( $cta ); ?></a></p>
    <?php endif; ?>
  </div>
</section>

<section id="about" class="section">
  <div class="container">
    <h2>About</h2>
    <p><?php echo wp_kses_post( get_theme_mod('cc_about_text') ); ?></p>
  </div>
</section>

<section id="features" class="section">
  <div class="container">
    <h2>Features</h2>
    <ul>
      <?php for ($i = 1; $i <= 3; $i++): $feat = get_theme_mod("cc_feature_{$i}"); if ($feat): ?>
        <li><?php echo esc_html($feat); ?></li>
      <?php endif; endfor; ?>
    </ul>
  </div>
</section>

<section id="pricing" class="section">
  <div class="container">
    <h2>Pricing</h2>
    <p><?php echo wp_kses_post( get_theme_mod('cc_pricing_text') ); ?></p>
  </div>
</section>

<section id="contact" class="section">
  <div class="container">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:<?php echo antispambot( get_theme_mod('cc_contact_email') ); ?>"><?php echo antispambot( get_theme_mod('cc_contact_email') ); ?></a></p>
    <p>Phone: <a href="tel:<?php echo esc_attr( preg_replace('/\D+/', '', get_theme_mod('cc_contact_phone')) ); ?>"><?php echo esc_html( get_theme_mod('cc_contact_phone') ); ?></a></p>
  </div>
</section>
