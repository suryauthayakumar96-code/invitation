# Surya & Kuralarasi · Wedding invitation

A complete React invitation inspired by the supplied replacement reel: a blue-sky temple scene, ornate blue and ivory arches, botanical layers, maroon and parchment panels, mobile stacked photographs, ambient music, scroll animation and calendar downloads.

## Run

```sh
npm install
npm run dev
```

On Windows PowerShell with restricted scripts, use `npm.cmd` instead of `npm`.

```sh
npm run lint
npm test
npm run build
npm run preview
```

Deploy the generated `dist` directory to any static hosting provider. No server, database, secrets or accounts are required.

## Personalise

All invitation content lives in `src/data/weddingDetails.js`: names, Tamil heading, dates, ceremony times, location, map URL, photos, gallery captions, invitation wording, WhatsApp and music. Use an ISO timestamp with `+05:30` for the start and end; keep the human-readable date and muhurtham in sync. The countdown and downloadable calendar use the timestamps. Times displayed are India Standard Time.

WhatsApp is hidden as requested. Set `whatsappNumber` to a full international number (digits only) to enable the RSVP, wishes and floating WhatsApp links. No RSVP is silently sent or stored; the guest reviews the prefilled message in WhatsApp.

The default Maps link searches the supplied venue name; replace `mapUrl` with the exact verified venue pin before sharing widely.

## Photos and music

No invented couple photos are used. Empty photo values show decorative lotus and mandala placeholders. Original AI-generated temple garden illustrations are served as responsive WebP assets through the `artwork` configuration. They are **not photographs or architectural depictions of the specific venue**. Set `photos.temple` to show the actual venue in the temple and directions sections. Artwork sources and exact generation prompts are documented in `src/assets/temple/ARTWORK.md`.

Recommended files:

```text
public/photos/groom.jpg
public/photos/bride.jpg
public/photos/temple.jpg
public/photos/couple-1.jpg ... couple-6.jpg
public/music/wedding-theme.mp3
```

Then set config URLs such as `photos.groom: '/photos/groom.jpg'`, `photos.temple: '/photos/temple.jpg'` and `gallery[0].src: '/photos/couple-1.jpg'`. Set meaningful alt descriptions. Aim for WebP/AVIF images under 250 KB, around 1000–1400 pixels wide. Gallery images load lazily; configured images open in a keyboard-accessible lightbox with arrow navigation, Escape dismissal and focus restoration.

Organised `src/assets/couple`, `temple`, `gallery`, `decorations` and `music` directories are also provided. To use those assets, import the files at the top of the configuration file and assign the imported URLs. Public assets are easiest to replace without modifying imports.

Music starts only when Open Invitation is pressed. With an empty `music.src`, an original, quiet pentatonic melody is synthesised locally through Web Audio. Supply a licensed audio file and set `music.src: '/music/wedding-theme.mp3'` to replace it. The configured volume applies to both. The control pauses and resumes without restarting the track after renders. Failed playback exposes a retry message.

The replacement local 22.5-second reel was inspected frame by frame. The implementation uses its blue temple introduction, ornate invitation architecture, maroon/gold palette transition, parchment landscape and stacked photo motion as design references. It does not embed the reference footage or copy its branding and personal images. Scoped GSAP contexts drive temple and foreground parallax and the invitation reveal; all are reverted for reduced motion and unmount. The entrance is a fixed overlay so its dismissal cannot shift scroll-trigger positions.

## Sharing and accessibility

The title, description and Open Graph metadata are generated from the configuration by Vite at build time, so social preview crawlers receive them without running JavaScript. Rebuild after editing the configuration. Add an `og:image` with an absolute hosted URL in `index.html` if you want a custom WhatsApp preview image.

Animations honour reduced motion. Layouts support 360px and up, with semantic sections, visible focus states, a skip link, labelled controls and touch-friendly buttons. Font downloads have serif/cursive fallbacks. No network requests are needed for illustration or the default soundtrack.

## Verification

`npm test` checks timezone-aware countdowns, post-wedding clamping, standards-compliant calendar content and WhatsApp message encoding. With the dev server running and Google Chrome installed, `node tests/browser-check.mjs` checks the opening, audio control state, calendar download, directions, countdown, hidden WhatsApp, reduced motion and overflow at 360, 375, 390, 430, 768, 1024 and 1440 pixels. It saves screenshots into `artifacts/`. `node tests/gallery-check.mjs` uses intercepted image fixtures to check lightbox navigation, keyboard focus trapping and restoration without changing your configured photos.

These are desktop Chrome viewport emulations, not physical iPhone/Android device tests. No Lighthouse score is claimed.
