<?php
// Serve the built SPA index.html from the theme directory and fix relative asset paths.
$spa_index = __DIR__ . '/index.html';
if (file_exists($spa_index)) {
    $html = file_get_contents($spa_index);
    $base = rtrim(get_template_directory_uri(), '/') . '/';
    // Inject <base> so ./assets and other relative paths resolve to the theme directory
    $html = preg_replace('/<head(.*?)>/', '<head$1><base href="' . $base . '">', $html, 1);
    echo $html;
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
