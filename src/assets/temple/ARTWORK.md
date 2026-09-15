# Original temple artwork

Generated with the built-in image generation tool for this invitation. This is a stylised Tamil temple illustration, not a photograph of Sami Malai Murugan Kovil. No personal photographs or footage from the reference reel are included in the app.

Source: `temple-garden-original.png`.
Web assets: `public/artwork/temple-garden.webp` (1024 × 1536), `public/artwork/temple-garden-mobile.webp` (640 × 960).
The desktop panorama is `public/artwork/temple-garden-wide.webp` (1536 pixels wide), from `temple-garden-wide-original.png`. The `<picture>` element selects it from 768px upwards.
The configuration's `artwork` values select these images. `photos.temple` independently holds the actual venue photo.

Generation prompt:

> Use case: stylized-concept. Asset type: production website background illustration, portrait 2:3. Create a lavish, highly detailed South Indian Tamil temple gopuram in a botanical garden, illustrated in premium hand-painted Indian miniature art with realistic architectural detail. A frontal majestic seven-tier colorful Dravidian gopuram rises in the center, covered in intricate sculpted niches and small traditional sculptural figures, indigo blue, turquoise, rose, aged gold, cream. Composition: entire tower including golden finials contained comfortably within central 60 percent of width; tower starts at 28 percent from top and base at 85 percent. Top 25 percent is clear luminous saturated azure blue sky reserved for website name typography, with delicate wispy white clouds only along sides. At bottom lush mango and banana leaves, palms and flowering trees frame a temple path; foliage taller at sides and low center, like a theater set with separated foreground and background depth. Daylight, romantic festive Tamil wedding, beautiful and refined, painterly detail, rich but harmonious color. NOT a photograph of any named temple. No text, no lettering, no logo, no watermark, no border, no mobile phone, no UI, no human couple. This is the actual illustration asset, edge-to-edge, not a website mockup.

## Reference interpretation

The user supplied a replacement 22.5-second reel showing a phone scrolling through a wedding invitation. The implemented cues are a blue sky and detailed temple introduction, a blue architectural frieze, scalloped ivory invitation panels, botanical accents, burgundy/gold scenes, parchment mountains, and a mobile stack of photographs. The film's phone, promotional text, names, photographs and branding are not reproduced. Animation is tied to the guest's scroll rather than a forced video playback timeline.

Panoramic expansion prompt (built-in image tool, original portrait as reference):

> Create a WIDE LANDSCAPE 16:9 expansion of this original Tamil temple garden illustration for a desktop wedding website hero. Preserve the central temple's architectural design, rich colors, and refined painterly detailed style. Show the ENTIRE tall gopuram and its golden finials in the central 32 percent of the wide frame, from finials at y=25 percent down to entrance at y=85 percent. Expand richly detailed tropical trees, flowering bushes, banana plants, palms and landscaped temple gardens naturally to both sides, with warm lamps near bottom. The top 20 percent of the image is open luminous azure sky reserved for text, with faint white clouds at sides. Make a seamless edge-to-edge panoramic landscape, not a portrait pasted on a background. Keep temple vertically upright, front facing, accurate proportions, never stretched. No text, UI, lettering, borders, watermarks, phones or wedding couple. The result must be much wider than tall.
