/**
 * @name pdf
 *
 * @desc Renders a PDF of the Puppeteer API spec. This is a pretty long page and will generate a nice, A4 size multi-page PDF.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pdf}
 */

const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage()
  await page.goto('https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pdf')
  await page.pdf({ path: 'api.pdf', format: 'A4' })
  await browser.close()
})