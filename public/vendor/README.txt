This folder is intended to contain vendor assets copied from CDNs to avoid cross-origin tracking-prevention blocking.

Please download the required files and place them here:

1) Particles.js
   - Save as: public/vendor/particles/particles.min.js
   - CDN: https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js

Example PowerShell commands to download (run from project root):

powershell -Command "iwr -OutFile public/vendor/particles/particles.min.js https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"

Or using curl (Git Bash / WSL / curl available):

curl -L -o public/vendor/particles/particles.min.js https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js

After placing the file, restart the dev server (`npm run dev`).
