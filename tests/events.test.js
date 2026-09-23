import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createCalendar, getCountdown, whatsappUrl } from '../src/lib/events.js';
import { weddingDetails as d } from '../src/data/weddingDetails.js';
test('countdown uses the Indian ceremony time across guest timezones', () => {
  assert.deepEqual(getCountdown(d.startAt, Date.parse('2026-10-24T04:15:00Z')), { days: 1, hours: 0, mins: 0, secs: 0, finished: false });
  assert.deepEqual(getCountdown(d.startAt, Date.parse('2026-10-25T04:15:01Z')), { days: 0, hours: 0, mins: 0, secs: 0, finished: true });
});
test('calendar has correct UTC ceremony time, escaped location and RFC line folding', () => {
  const calendar = createCalendar(d);
  assert.match(calendar, /DTSTART:20261025T041500Z/);
  assert.match(calendar, /DTEND:20261025T061500Z/);
  assert.match(calendar, /LOCATION:SwamiMalai Murugan Kovil\\, Thanjavur\\, Tamil Nadu/);
  for (const line of calendar.split('\r\n')) assert.ok(new TextEncoder().encode(line).length <= 75);
  assert.match(calendar, /END:VCALENDAR\r\n$/);
});
test('RSVP carries guest details safely in a single encoded WhatsApp message', () => {
  const url = new URL(whatsappUrl(d, false, { name: '  Priya & family  ', count: '3', note: 'See you soon! ❤️' }));
  assert.equal(url.pathname, '/918946075119');
  assert.deepEqual([...url.searchParams.keys()], ['text']);
  assert.match(url.searchParams.get('text'), /Guest name: Priya & family\nNumber attending: 3\nNote: See you soon! ❤️/);
  assert.doesNotMatch(new URL(whatsappUrl(d, true, {name:'Priya',count:3})).searchParams.get('text'), /Number attending/);
});
test('WhatsApp encodes the recipient and distinct RSVP and wishes messages', () => {
  const details = { ...d, whatsappNumber: '+91 98765 43210' };
  const rsvp = new URL(whatsappUrl(details));
  assert.equal(rsvp.pathname, '/919876543210');
  assert.match(rsvp.searchParams.get('text'), /I'll be happy to join/);
  assert.match(new URL(whatsappUrl(details, true)).searchParams.get('text'), /Wishing you a lifetime/);
});
