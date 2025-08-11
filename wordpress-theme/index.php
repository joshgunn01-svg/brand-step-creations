<?php
/**
 * Minimal one-page index template for CustomCharm Theme
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="<?php echo esc_url( home_url('/') ); ?>" />
  <meta name="description" content="Custom shoe charms for cafes, bars, retail, events & tourism. From $1.50/unit. Free mockup & fast delivery Australia-wide." />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<a class="screen-reader-text" href="#content">Skip to content</a>

<?php $img = esc_url( get_template_directory_uri() . '/assets/images' ); ?>

<header class="site-header">
  <div class="container" style="display:flex;align-items:center;justify-content:space-between;gap:1rem;height:64px;">
    <a class="brand" href="<?php echo esc_url( home_url('/') ); ?>">
      <img src="<?php echo $img; ?>/logo.svg" alt="CustomCharm Co logo" />
      <span class="site-title">CustomCharm Co</span>
    </a>
    <nav class="nav" aria-label="Primary">
      <a href="#hero">Home</a>
      <a href="#examples">Examples</a>
      <a href="#benefits">Benefits</a>
      <a href="#process">Process</a>
      <a class="cta" href="#contact">Request Free Mockup</a>
    </nav>
  </div>
</header>

<main id="content">
  <!-- HERO -->
  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-frame" style="aspect-ratio:16/9;">
        <img class="hero-img" src="<?php echo $img; ?>/2d61b2a2-d92c-4e2b-88a8-ba5f162e7dfb-clean.png" alt="Hero: white foam clogs with cafe-themed 3D charms (coffee cup, shopping bag, 'Your Logo Here' shield, heart, dumbbells, QR code)" loading="eager" />
        <div class="hero-overlay" aria-hidden></div>
        <div class="hero-copy">
          <h1>Your Logo<br/>Your Charm</h1>
          <p>Boost brand awareness with custom PVC charms for cafes, retail, events & tourism.</p>
          <div class="row mt-6">
            <a class="cta" href="#contact">Request a Free Mockup</a>
            <a class="cta alt" href="#contact">Get a Quote</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- EXAMPLES -->
  <section id="examples" class="section">
    <div class="container">
      <h2>Example Designs</h2>
      <div class="grid grid-3 mt-6">
        <?php
          $examples = [
            '84d7e845-e760-4710-9fa8-1957691e6b38.png',
            '072ecd0d-864d-4225-93db-6bb9a31ad0ed.png',
            'df0b164a-c28d-40a1-8f0d-4f086b83df7a.png',
            '44d1ae5e-ac9b-4bae-b191-5d2773e34391.png',
            '463cdbfe-e8a8-4475-8115-ac238f8c2214.png',
            '2ba1dd87-b771-411a-bbbf-8316c0a8555b.png',
          ];
          foreach ($examples as $file): ?>
            <article class="card"><img src="<?php echo $img . '/' . esc_attr($file); ?>" alt="Product photo: custom PVC shoe charms clipped into foam clog holes, 3D embossed and professionally lit" loading="lazy"></article>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- BENEFITS -->
  <section id="benefits" class="section" style="background:rgba(255,255,255,0.02)">
    <div class="container">
      <h2>Why brands choose us</h2>
      <div class="grid grid-3 mt-6">
        <div class="card" style="padding:1rem"><p>Wholesale pricing from $1.50/unit (min. 500 units)</p></div>
        <div class="card" style="padding:1rem"><p>Custom designs &amp; branding</p></div>
        <div class="card" style="padding:1rem"><p>Fast turnaround &amp; delivery Australia-wide</p></div>
        <div class="card" style="padding:1rem"><p>High-quality, durable materials</p></div>
      </div>
    </div>
  </section>

  <!-- PROCESS -->
  <section id="process" class="section">
    <div class="container">
      <h2>Our Simple 4-Step Process</h2>
      <div class="grid grid-3 mt-6">
        <div>
          <div class="card"><img src="<?php echo $img; ?>/process-step-1.jpg" alt="Step 1 mockup" loading="lazy"></div>
          <div class="row mt-6" style="align-items:center"><span class="badge">1</span><strong>Enquire &amp; send logo</strong></div>
        </div>
        <div>
          <div class="card"><img src="<?php echo $img; ?>/process-step-2.jpg" alt="Step 2 mockup" loading="lazy"></div>
          <div class="row mt-6" style="align-items:center"><span class="badge">2</span><strong>Receive digital mockup</strong></div>
        </div>
        <div>
          <div class="card"><img src="<?php echo $img; ?>/process-step-3.jpg" alt="Step 3 mockup" loading="lazy"></div>
          <div class="row mt-6" style="align-items:center"><span class="badge">3</span><strong>Approve &amp; confirm</strong></div>
        </div>
        <div>
          <div class="card"><img src="<?php echo $img; ?>/process-step-4.jpg" alt="Step 4 mockup" loading="lazy"></div>
          <div class="row mt-6" style="align-items:center"><span class="badge">4</span><strong>Production &amp; delivery</strong></div>
        </div>
      </div>
      <div class="mt-8"><a class="cta alt" href="#contact">Start your enquiry</a></div>
    </div>
  </section>

  <!-- CONTACT (simple anchor target) -->
  <section id="contact" class="section">
    <div class="container">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:hello@example.com">hello@example.com</a></p>
      <p>Phone: <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="container">
    <p>&copy; <?php echo esc_html( date('Y') ); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
