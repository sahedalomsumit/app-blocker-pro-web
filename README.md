# App Blocker Pro website

A responsive, dependency-free HTML/CSS/JavaScript website for [App Blocker Pro](https://play.google.com/store/apps/details?id=com.sahed.app_blocker_pro).

## Pages

- `index.html` — homepage, features, screenshot gallery, privacy overview, and FAQs.
- `privacy-policy.html` — on-device data, account information, Firebase settings sync, permissions, and privacy choices.
- `data-deletion.html` — guest deletion, email requests for Google-linked accounts, local resets, and backups.
- `sitemap.xml` and `robots.txt` — search-engine discovery for `https://app-blocker-pro.sahedalomsumit.com/`.
- `CNAME` — custom domain for GitHub Pages (DNS must also be configured).

Open `index.html` directly, or serve this directory with any static web server. There is no build step. Navigation and legal content work without JavaScript; JavaScript adds the mobile menu, gallery controls, reveal transitions, and current copyright year. Reduced-motion preferences are respected.

## Add your images

The app logo in `img/app_blocker_pro_logo.png` is used for all brand marks, the favicon, and the Apple touch icon. The hero phone, four screenshot slots, and the wide feature graphic remain intentionally blank. There are no broken image URLs or sample screenshots.

Create an `img/` directory and insert an image inside each matching placeholder, for example:

```html
<div class="image-slot screen-image">
  <img src="img/usage.webp" alt="App Blocker Pro Usage screen showing daily screen time" width="900" height="1950" loading="lazy">
</div>
```

- `.logo-slot`: square app icon, repeated in each page header/footer and the homepage closing section; its shared background image is configured in `style.css`.
- `.hero-image`: approximately 9:19.5 portrait screenshot; use `fetchpriority="high"` instead of lazy loading for this one.
- `.screen-image`: four approximately 9:19.5 screenshots, ordered Usage, Focus, Reducers, Settings.
- `.feature-image`: approximately 2.06:1 wide feature graphic.

When replacing a placeholder's `role="img"` with a real image, remove that placeholder's `role` and `aria-label`; put an accurate `alt` description on the image instead. Add Open Graph image metadata when the final feature artwork is ready.

## Design and content

The palette and typography follow the Android source: emerald `#2E9C7E`, dark background `#0A0F0D`, tiered green surfaces, and DM Sans. The layout takes inspiration from `document-viewer-web`, but the feature and privacy content is specific to App Blocker Pro. DM Sans is loaded from Google Fonts; the privacy policy discloses that external request.

The content reflects the sibling Android repository reviewed on November 8, 2026: Android 8.0+, local usage history, Google/anonymous Firebase authentication, settings-only sync, and in-app guest deletion. Google-linked account deletion uses a developer email request because an equivalent in-app deletion flow was not found. The website cannot delete Firebase data itself.

Before publishing, review the privacy text against the actual Play Store release and data-safety declarations. Confirm that `sahedalomsumit@gmail.com` is monitored and that you can fulfill account-deletion requests. Keep the policy, deletion instructions, revision dates, and sitemap dates up to date as the app changes.
