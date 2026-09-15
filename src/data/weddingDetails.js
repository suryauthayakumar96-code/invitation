// Edit this file to personalise the entire invitation. Public assets use /paths.
export const weddingDetails = {
  groom: 'Surya', bride: 'Kuralarasi',
  date: '25 October 2026', day: 'Sunday',
  // Include the timezone offset so guests everywhere see the same countdown.
  startAt: '2026-10-25T09:00:00+05:30',
  endAt: '2026-10-25T10:30:00+05:30',
  muhurtham: '09:00 AM – 10:30 AM', reception: '', timezoneLabel: 'India Standard Time',
  venue: 'Sami Malai Murugan Kovil', location: 'Thanjavur, Tamil Nadu',
  tamilHeading: 'முத்து முருகன் துணை',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sami+Malai+Murugan+Kovil+Thanjavur+Tamil+Nadu',
  // Country code + number, digits only, e.g. 919876543210. Blank uses WhatsApp's contact picker.
  whatsappNumber: '',
  music: { src: '', volume: 0.25 }, // e.g. /music/wedding-theme.mp3; blank plays a quiet original ambient melody.
  photos: { temple: '', groom: '', bride: '', couple: '' },
  // Original illustration assets; actual venue photos belong in photos.temple.
  artwork: { temple: '/artwork/temple-garden.webp', templeSmall: '/artwork/temple-garden-mobile.webp', templeWide: '/artwork/temple-garden-wide.webp' },
  gallery: [
    { src: '', alt: 'A moment together', caption: 'A little love, a lifetime of memories', shape: 'portrait' },
    { src: '', alt: 'Our wedding memories', caption: 'The joy in the little things', shape: 'square' },
    { src: '', alt: 'Our journey together', caption: 'Every moment, with you', shape: 'landscape' },
    { src: '', alt: 'A favourite memory', caption: 'Our kind of forever', shape: 'portrait' },
    { src: '', alt: 'A shared celebration', caption: 'Surrounded by love', shape: 'square' },
    { src: '', alt: 'Our beautiful beginning', caption: 'And so, our story begins', shape: 'landscape' },
  ],
  copy: {
    invitation: 'Together with our families',
    invitationSecond: 'we invite you to celebrate the wedding of',
    couple: 'Two souls, one journey. With hearts full of love and the blessings of our families, we begin a beautiful new chapter together.',
    temple: 'Where prayers become promises, and a new journey begins. In the sacred presence of Lord Murugan, we come together to celebrate love, family, and forever.',
    blessing: 'With the blessings of our families, we begin our forever.',
    rsvp: 'We would be delighted to celebrate our special day with you.',
    closing: 'We can’t wait to celebrate with you',
  },
};
