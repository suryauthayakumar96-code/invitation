// Edit this file to personalise the entire invitation. Public assets use /paths.
export const weddingDetails = {
  groom: 'Surya', bride: 'Kuralarasi',
  date: '25 October 2026', day: 'Sunday',
  // Include the timezone offset so guests everywhere see the same countdown.
  startAt: '2026-10-25T09:45:00+05:30',
  endAt: '2026-10-25T11:45:00+05:30',
  muhurtham: '09:45 AM – 11:45 AM', reception: '', timezoneLabel: 'India Standard Time',
  venue: 'SwamiMalai Murugan Kovil', location: 'Thanjavur, Tamil Nadu',
  tamilHeading: 'முருகன் துணை',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sami+Malai+Murugan+Kovil+Thanjavur+Tamil+Nadu',
  // Country code + number, digits only, e.g. 919876543210. Blank uses WhatsApp's contact picker.
  whatsappNumber: '918946075119',
  music: { src: '/music/wedding-theme.mpeg', volume: 0.25 },
  photos: { temple: '', groom: '', bride: '', portrait: '/photos/couple-temple.jpg', portraitAspectRatio: '1066 / 1600', couple: '/photos/couple-motorbike.jpg', coupleAspectRatio: '1600 / 1067' },
  // Original illustration assets; actual venue photos belong in photos.temple.
  artwork: { temple: '/artwork/temple-garden.webp', templeSmall: '/artwork/temple-garden-mobile.webp', templeWide: '/artwork/temple-garden-wide.webp' },
  gallery: [
    { src: '/photos/couple-road-ride.jpg', alt: 'Surya and Kuralarasi together on a motorcycle along a tree-lined road', caption: 'Every journey is better with you', shape: 'landscape', aspectRatio: '1600 / 1067' },
    { src: '/photos/couple-saree-breeze.jpg', alt: 'Surya and Kuralarasi beside a motorcycle with her saree flowing in the breeze', caption: 'A little breeze, a lifetime of love', shape: 'landscape', aspectRatio: '1600 / 1067' },
    { src: '/photos/couple-temple-walk.jpg', alt: 'Surya and Kuralarasi smiling at each other and holding hands in a temple courtyard', caption: ' always My person. My always.', shape: 'portrait', aspectRatio: '1067 / 1600' },
    { src: '/photos/couple-holding-hands.jpg', alt: 'Surya and Kuralarasi holding hands beneath the trees', caption: 'Hand in hand,', shape: 'portrait', aspectRatio: '1067 / 1600' },
    { src: '/photos/couple-garden.jpg.jpeg', alt: 'Surya and Kuralarasi sitting together in a leafy garden', caption: 'Together is our favourite place', shape: 'portrait', aspectRatio: '1067 / 1600' },
  ],
  copy: {
    storyHeading: 'My favourite place is next to you.',
    story: 'In the everyday moments, the shared laughter, and every new adventure — we found our forever.',
    invitation: 'Together with our families',
    invitationSecond: 'we invite you to celebrate the wedding of',
    couple: 'Two souls, one journey. With hearts full of love and the blessings of our families, we begin a beautiful new chapter together.',
    temple: 'Where prayers become promises, and a new journey begins. In the sacred presence of Lord Murugan, we come together to celebrate love, family, and forever.',
    blessing: 'With the blessings of our families, we begin our forever.',
    rsvp: 'We would be delighted to celebrate our special day with you.',
    closing: 'We can’t wait to celebrate with you',
  },
};