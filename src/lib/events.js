export function getCountdown(startAt, now = Date.now()) {
  const remaining = Math.max(0, Math.floor((new Date(startAt).getTime() - now) / 1000));
  return { days: Math.floor(remaining / 86400), hours: Math.floor(remaining / 3600) % 24, mins: Math.floor(remaining / 60) % 60, secs: remaining % 60, finished: remaining === 0 };
}
const escapeICS = (value) => String(value).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
const stamp = (value) => new Date(value).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
export function createCalendar(details) {
  const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Wedding Invitation//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT',`UID:${stamp(details.startAt)}-wedding@invitation.local`,`DTSTAMP:${stamp(Date.now())}`,`DTSTART:${stamp(details.startAt)}`,`DTEND:${stamp(details.endAt)}`,`SUMMARY:${escapeICS(`${details.groom} & ${details.bride} — Wedding`)}`,`LOCATION:${escapeICS(`${details.venue}, ${details.location}`)}`,`DESCRIPTION:${escapeICS(`Join us to celebrate our wedding. Muhurtham: ${details.muhurtham}. ${details.mapUrl}`)}`,'END:VEVENT','END:VCALENDAR'];
  // Fold by UTF-8 octets, preserving Unicode characters (RFC 5545).
  return lines.map(line => { let result = '', width = 0; for (const char of line) { const bytes = new TextEncoder().encode(char).length; if (width + bytes > 75) { result += '\r\n '; width = 1; } result += char; width += bytes; } return result; }).join('\r\n') + '\r\n';
}
export function downloadCalendar(details) {
  const url = URL.createObjectURL(new Blob([createCalendar(details)], { type: 'text/calendar;charset=utf-8' }));
  const link = document.createElement('a'); link.href = url; link.download = 'our-wedding.ics'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export function whatsappUrl(details, wishes = false, guest = {}) {
  const text = `Hi ${details.groom} & ${details.bride} ❤️\n\n${wishes ? 'Wishing you a lifetime of love and happiness as you begin this beautiful journey together!' : `I'll be happy to join you for your wedding on ${details.date}.`}`;
  const name = String(guest.name || '').trim().slice(0, 100);
  const count = Math.max(1, Math.min(10, Number.parseInt(guest.count, 10) || 1));
  const introduction = !wishes && name ? `\n\nGuest name: ${name}\nNumber attending: ${count}${guest.note?.trim() ? `\nNote: ${guest.note.trim().slice(0, 500)}` : ''}` : '';
  return `https://wa.me/${String(details.whatsappNumber || '').replace(/\D/g, '')}?text=${encodeURIComponent(text + introduction)}`;
}
