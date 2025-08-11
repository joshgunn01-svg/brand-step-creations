<?php
// Serve the built SPA index.html from the theme directory.
$spa_index = __DIR__ . '/index.html';
if (file_exists($spa_index)) {
    // Output the static build directly so relative asset paths (./assets/...) work.
    readfile($spa_index);
    exit;
}
?><!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Site not built yet</title>
  <style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;padding:2rem;line-height:1.6}</style>
</head>
<body>
  <h1>Build not found</h1>
  <p>The SPA build (index.html) was not found in this theme directory.</p>
  <p>Please run the GitHub Action named “Build WordPress Theme” to generate the theme ZIP and upload it via Appearance → Themes → Upload Theme.</p>
</body>
</html>
