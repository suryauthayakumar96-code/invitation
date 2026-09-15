import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const page = await browser.newPage({ reducedMotion: 'reduce', viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  // Fixtures are intercepted only in this browser; real invitation configuration is unchanged.
  await page.route('**/src/data/weddingDetails.js', async route => {
    const response = await route.fetch();
    let body = await response.text();
    body = body.replace("{ src: '', alt: 'A moment together'", "{ src: '/favicon.svg', alt: 'A moment together'")
      .replace("{ src: '', alt: 'Our wedding memories'", "{ src: '/favicon.svg', alt: 'Our wedding memories'");
    await route.fulfill({ response, body });
  });
  await page.goto('http://localhost:5173');
  if ((await page.title()).startsWith('Warning:')) { await page.getByRole('button', { name: 'Continue', exact: true }).click(); await page.waitForLoadState('networkidle'); await page.goto('http://localhost:5173'); }
  await page.getByRole('button', { name: 'Open Invitation' }).click();
  const opener = page.getByRole('button', { name: 'View A moment together' });
  await opener.click();
  const dialog = page.getByRole('dialog');
  await dialog.waitFor();
  assert.equal(await page.getByRole('button', { name: 'Close gallery' }).evaluate(el => document.activeElement === el), true);
  await page.keyboard.press('ArrowRight');
  assert.equal(await dialog.locator('img').getAttribute('alt'), 'Our wedding memories');
  await page.keyboard.press('ArrowLeft');
  assert.equal(await dialog.locator('img').getAttribute('alt'), 'A moment together');
  await page.getByRole('button', { name: 'Close gallery' }).focus();
  await page.keyboard.press('Shift+Tab');
  assert.equal(await page.getByRole('button', { name: 'Next photo' }).evaluate(el => document.activeElement === el), true);
  await page.keyboard.press('Escape');
  assert.equal(await dialog.count(), 0);
  assert.equal(await opener.evaluate(el => document.activeElement === el), true);
  assert.equal(await page.evaluate(() => document.body.style.overflow), '');
  assert.deepEqual(errors, []);
  console.log('Gallery fixtures passed: image opening, navigation, focus trap, Escape, focus restoration and scroll unlock.');
} finally { await browser.close(); }
