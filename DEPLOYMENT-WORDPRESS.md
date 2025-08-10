# WordPress Deployment (Static Upload)

This project is a React + Vite SPA. These steps prepare a static build you can upload into a WordPress site without server rewrites.

## What we configured
- HashRouter for routing (URLs like `#/pricing`) so it works on WordPress without .htaccess changes.
- Vite base set to `./` for correct relative asset paths when hosted in a subfolder.
- GitHub Action that builds and publishes `dist.zip` as a workflow artifact.

## Download the build from GitHub
1. Push to `main` (or click "Run workflow" on the "Build and Upload Dist" workflow).
2. In GitHub → Actions → Build and Upload Dist → select the latest run.
3. Download the artifact named `dist-zip` (file `dist.zip`).

## Upload to WordPress
Option A — File Manager/Hosting File Access (recommended):
- Unzip `dist.zip` locally.
- Upload the contents to a folder on your site, e.g. `/wp-content/uploads/customcharm/`.
- Access it at `https://yourdomain.com/wp-content/uploads/customcharm/index.html`.

Option B — Media Library via plugin:
- Use a plugin that allows folder uploads (e.g., File Manager or Media Library Organizer that supports folders).
- Upload the unzipped folder as above.

## Embed in a WordPress page (optional)
- Create a WordPress page, then add a custom HTML block with:

  <iframe src="/wp-content/uploads/customcharm/index.html" style="width:100%;height:100vh;border:0;" loading="lazy"></iframe>

Adjust the path if you used a different folder.

## Local build (alternative)
If you prefer to build locally:
- npm ci
- npm run build
- Upload the generated `dist/` folder (or zip it) to WordPress as described above.

## Notes
- Because we use HashRouter, deep links are `/#/route` and won’t 404 on WordPress.
- Keep the folder structure intact; don’t move files out of `assets`.
- For best results host under a subfolder (e.g., `/customcharm/`).
