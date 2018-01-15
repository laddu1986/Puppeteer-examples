/**
 * @name get list of links
 *
 * @desc Scrapes Hacker News for links on the home page and returns the top 10
 */
const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage()
  await page.tracing.start({path: 'trace.json', categories: ['devtools.timeline']})
  await page.goto('https://news.ycombinator.com/news')

  // execute standard javascript in the context of the page.
  const stories = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a.storylink'))
    return anchors.map(anchor => anchor.textContent).slice(0, 10)
  })
  console.log(stories)
  await page.tracing.stop();
  await browser.close()
})