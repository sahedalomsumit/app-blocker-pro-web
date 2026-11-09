# App Blocker Pro website

A responsive, dependency-free HTML/CSS/JavaScript website for [App Blocker Pro](https://play.google.com/store/apps/details?id=com.sahed.app_blocker_pro).

## Pages

- `index.html` — homepage, features, screenshot gallery, privacy overview, and FAQs.
- `privacy-policy.html` — on-device data, account information, Firebase settings sync, permissions, and privacy choices.
- `data-deletion.html` — guest deletion, email requests for Google-linked accounts, local resets, and backups.
- `sitemap.xml` and `robots.txt` — search-engine discovery for `https://app-blocker-pro.sahedalomsumit.com/`.
- `CNAME` — custom domain for GitHub Pages (DNS must also be configured).

Open `index.html` directly, or serve this directory with any static web server. There is no build step. Navigation and legal content work without JavaScript; JavaScript adds the mobile menu, gallery controls, reveal transitions, and current copyright year. Reduced-motion preferences are respected.

## Images

All artwork is served locally from `img/`:

- `app_blocker_pro_logo.png`: shared brand marks, favicon, and Apple touch icon.
- `feature-graphic-app-blocker-pro.jpg`: wide feature artwork and social-preview image.
- `app-blocker-pro-4.jpeg`: the high-priority hero screenshot.
- `app-blocker-pro-1.jpeg` through `app-blocker-pro-8.jpeg`: the horizontally scrollable gallery, ordered Usage, Focus, Reducers, Settings, Unlocking, Account, Setup, and Fresh Start.
- `onboarding (1).jpeg` through `onboarding (3).jpeg`: the three-screen introduction below the privacy section.

Screenshots retain their full portrait composition without cropping. Images have descriptive alternative text and explicit dimensions; below-the-fold screenshots are lazy-loaded. When replacing screenshots, update the dimensions and shared aspect ratio in `style.css` if needed. Review screenshots for personal information before publishing; the supplied Settings screenshot shows the developer profile and email.

## Design and content

The palette and typography follow the Android source: emerald `#2E9C7E`, dark background `#0A0F0D`, tiered green surfaces, and DM Sans. The layout takes inspiration from `document-viewer-web`, but the feature and privacy content is specific to App Blocker Pro. DM Sans is loaded from Google Fonts; the privacy policy discloses that external request.

The content reflects the sibling `app-blocker-pro` Android repository and Play listing draft reviewed on November 10, 2026: Android 8.0+, time-based short-video limits, app/website/keyword rules, focus sessions, Focus Groups, Pomodoro, optional NFC unlocking, local usage history, Google/anonymous Firebase authentication, settings-only sync, and in-app guest deletion. Removed reel counting, Gentle Prompts, delayed settings changes, and camera/QR unlocking are not advertised. Google-linked account deletion uses a developer email request because an equivalent in-app deletion flow was not found. The website cannot delete Firebase data itself.

Before publishing, review the privacy text against the actual Play Store release and data-safety declarations. Confirm that `sahedalomsumit@gmail.com` is monitored and that you can fulfill account-deletion requests. Keep the policy, deletion instructions, revision dates, and sitemap dates up to date as the app changes.
