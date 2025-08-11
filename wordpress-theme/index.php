<?php
/**
 * Minimal one-page index template (no header/footer files required)
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="<?php echo esc_url( home_url('/') ); ?>" />
  <meta name="description" content="Custom shoe charms for cafes, retail, events & tourism. From $1.50/unit. Free mockup & fast delivery Australia-wide." />
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
      <a href="#gallery">Gallery</a>
      <a href="#industries">Industries</a>
      <a href="#pricing">Pricing</a>
      <a class="cta" href="#contact">Request Free Mockup</a>
    </nav>
  </div>
</header>

<main id="content">
  <!-- HERO -->
  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-frame" style="aspect-ratio:16/9;">
        <img class="hero-img" src="<?php echo $img; ?>/hero-homepage.jpg" alt="Hero: custom shoe charms on white clogs with branded 3D PVC elements" loading="eager" />
        <div class="hero-overlay" aria-hidden></div>
        <div class="hero-copy">
          <h1>Your Logo<br/>Your Charm</h1>
          <p>Boost brand awareness with custom PVC charms for cafes, retail, events & tourism.</p>
          <div class="row mt-6">
            <a class="cta" href="#contact">Request a Free Mockup</a>
            <a class="cta alt" href="#pricing">Get a Quote</a>
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
        <article class="card"><img src="<?php echo $img; ?>/design-1.png" alt="Custom PVC shoe charms example 1" loading="lazy"></article>
        <article class="card"><img src="<?php echo $img; ?>/design-2.png" alt="Custom PVC shoe charms example 2" loading="lazy"></article>
        <article class="card"><img src="<?php echo $img; ?>/design-3.png" alt="Custom PVC shoe charms example 3" loading="lazy"></article>
        <article class="card"><img src="<?php echo $img; ?>/design-4.png" alt="Custom PVC shoe charms example 4" loading="lazy"></article>
        <article class="card"><img src="<?php echo $img; ?>/design-5.png" alt="Custom PVC shoe charms example 5" loading="lazy"></article>
        <article class="card"><img src="<?php echo $img; ?>/design-6.png" alt="Custom PVC shoe charms example 6" loading="lazy"></article>
      </div>
    </div>
  </section>

  <!-- BENEFITS -->
  <section id="benefits" class="section" style="background:rgba(255,255,255,0.02)">
    <div class="container">
      <h2>Why brands choose us</h2>
      <div class="grid grid-3 mt-6">
        <div class="card" style="padding:1rem"><p>Wholesale pricing from $1.50/unit (min. 500 units)</p></div>
        <div class="card" style="padding:1rem"><p>Custom designs & branding</p></div>
        <div class="card" style="padding:1rem"><p>Fast turnaround & delivery Australia-wide</p></div>
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

  <!-- GALLERY -->
  <section id="gallery" class="section" style="background:rgba(255,255,255,0.02)">
    <div class="container">
      <h2>Gallery &amp; Examples</h2>
      <div class="grid grid-3 mt-6">
        <article class="card"><img src="<?php echo $img; ?>/gallery-cafe-1.jpg" alt="Cafe display with custom shoe charms" loading="lazy"></article>
        <article class="card"><img src="<?php echo $img; ?>/gallery-bar-1.jpg" alt="Bar merchandise shoe charms" loading="lazy"></article>
        <article class="card"><img src="<?php echo $img; ?>/gallery-retail-1.jpg" alt="Retail wall display of shoe charms" loading="lazy"></article>
        <article class="card"><img src="<?php echo $img; ?>/gallery-closeup-1.jpg" alt="Close-up of PVC charm quality" loading="lazy"></article>
        <article class="card"><img src="<?php echo $img; ?>/gallery-tourism-1.jpg" alt="Tourism themed shoe charms" loading="lazy"></article>
        <article class="card"><img src="<?php echo $img; ?>/gallery-festival-1.jpg" alt="Festival giveaway charms" loading="lazy"></article>
      </div>
    </div>
  </section>

  <!-- INDUSTRIES -->
  <section id="industries" class="section">
    <div class="container">
      <h2>Industries We Serve</h2>
      <div class="grid grid-3 mt-6">
        <article class="card" style="padding:1rem"><h3>Cafes</h3><p class="muted">Resale, loyalty gifts, staff accessories</p></article>
        <article class="card" style="padding:1rem"><h3>Bars &amp; Venues</h3><p class="muted">Merchandise, event giveaways</p></article>
        <article class="card" style="padding:1rem"><h3>Festivals</h3><p class="muted">Branded souvenirs, VIP perks</p></article>
        <article class="card" style="padding:1rem"><h3>Retail Stores</h3><p class="muted">Point-of-sale add-ons, brand promos</p></article>
        <article class="card" style="padding:1rem"><h3>Tourism &amp; Souvenirs</h3><p class="muted">Destination-branded charms</p></article>
        <article class="card" style="padding:1rem"><h3>Sporting Clubs</h3><p class="muted">Team merchandise, supporter packs</p></article>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <section id="pricing" class="section" style="background:rgba(255,255,255,0.02)">
    <div class="container">
      <h2>Pricing &amp; Minimum Order</h2>
      <div class="card" style="padding:1.5rem;max-width:680px;">
        <p style="font-size:1.125rem;font-weight:600">From $1.50 / unit</p>
        <p class="muted">Minimum order: 500 units</p>
        <p class="muted" style="font-size:.95rem">Bulk discounts available for larger quantities. Pricing varies by complexity and finish.</p>
        <div class="row mt-6">
          <a class="cta" href="#contact">Request a Quote</a>
          <a class="cta alt" href="#contact">Get a Free Mockup</a>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
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
