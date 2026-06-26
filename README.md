# Hotel The Raghavas' — Website + Installable App (PWA)

A single website that works in any browser on **Windows, Android, and iPhone/iPad**, and
can also be **installed like an app** (home-screen icon, full-screen, works offline).

---

## 1. What's in this folder

```
Hotel-Raghavas-Website/
├── index.html              ← the website (open this to preview)
├── manifest.webmanifest    ← makes it installable as an app
├── service-worker.js       ← makes it work offline
├── icons/                  ← app icons (Android / iOS / Windows / favicon)
└── images/                 ← all room photos (68 photos)
```

> The room photos were moved out of the HTML into the `images/` folder. This makes the
> page load in about **150 KB instead of 16 MB**, so it opens fast on mobile data. The
> large high-resolution photos only download when a guest taps a photo to zoom.
> **Keep all files together** — don't move `index.html` away from the folders.

---

## 2. Preview it on your computer

Double-click **`index.html`** — it opens in your browser and everything works.

> Note: the "Install app" button and offline mode only appear when the site is opened
> over **`https://`** (a real web address), not from a local file. So to get the full
> app experience, publish it first (next step).

---

## 3. Publish it (get a free `https://` link) — Recommended

You need a public link so guests can open it and so the "install as app" feature works.
Both options below are **free**.

### Option A — Netlify Drop (easiest, no account needed to start)
1. Go to **https://app.netlify.com/drop**
2. Drag the **whole `Hotel-Raghavas-Website` folder** onto the page.
3. In a few seconds you get a link like `https://random-name.netlify.app`.
4. (Optional) Create a free account to rename it (e.g. `hotelraghavas.netlify.app`)
   or connect your own domain like `hotelraghavas.com`.

### Option B — GitHub Pages (good if you already use GitHub)
1. Create a new repository, upload all files in this folder.
2. Repo **Settings → Pages → Build from branch → `main` / root → Save**.
3. Your link will be `https://<username>.github.io/<repo>/`.

Either way, share that link via WhatsApp, Instagram bio, Google Business, or a printed
**QR code** at the reception desk. (You can make a free QR code for the link at
sites like qr-code-generator.com once you have the address.)

---

## 4. How guests "install" it as an app

Once opened from the published `https://` link:

- **Android (Chrome):** a gold **"⬇ Install app"** button appears, or use
  the browser menu (⋮) → **"Install app" / "Add to Home screen"**.
- **iPhone / iPad (Safari):** tap the **Share** button (□↑) → **"Add to Home Screen"**.
  (A small hint banner shows this automatically.)
- **Windows / Mac (Chrome or Edge):** an **install icon** appears in the address bar,
  or menu → **"Install Hotel The Raghavas'…"**.

After installing, it opens full-screen with its own icon, just like a normal app, and
keeps working even with a poor or no connection.

---

## 5. Editing content later (rates, phone, rooms)

Open **`index.html`** in any text editor (e.g. Notepad). Useful spots:

- **WhatsApp number:** near the top of the `<script>` —
  `const WA_NUMBER = "919453451513";`
- **Phone / email / address:** in the `<footer>` and `address-bar` sections.
- **Room names & rates:** in the `const rooms = [ ... ]` list — each room has
  `name`, `rates` (valid till 30 Sep 2026) and `rates2` (1 Oct 2026 – 31 Mar 2027).
- **Adding/replacing photos:** put new `.jpg` files in `images/` and update that room's
  `imgs` (carousel) and `fullImgs` (zoom) lists with the new file names.

After editing, re-publish (re-drag to Netlify, or push to GitHub). Installed users get
the update automatically the next time they open it online.

---

## 6. Compatibility summary

| Platform | Browser | Works | Installable |
|----------|---------|:-----:|:-----------:|
| Windows  | Chrome / Edge | ✅ | ✅ |
| Android  | Chrome / others | ✅ | ✅ |
| iPhone / iPad | Safari | ✅ | ✅ (Add to Home Screen) |
| Mac      | Safari / Chrome | ✅ | ✅ (Chrome/Edge) |

Built as a Progressive Web App (PWA): responsive layout, offline support, app icons,
and iOS-safe handling of the notch and status bar.
