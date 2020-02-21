const { getBrowser } = require('../setup.js')

module.exports = async function pageshot (req, res) {
  const { query = {} } = req;
  const { url, height, width, dpr, full } = query

  if (typeof url !== 'string') {
    res.code = 400
    res.body = 'URL is required.'
    return
  }

  const fullPage = !!full
  const viewport = {
    width: parseInt(width, 10) || 960,
    height: parseInt(height, 10) || 640,
    deviceScaleFactor: parseInt(dpr, 10) || 2
  }

  console.time(url)
  try {
    const page = await (await getBrowser()).newPage()
    await page.setViewport(viewport)
    await page.goto(url, {timeout: 10000})
    const screenshot = await page.screenshot({fullPage})
    res.set('Content-Type', 'image/png')
    res.send(screenshot);
    page.close()
  } catch (e) {
    res.body = 'PAGESHOT FAILED: ' + e.message
    res.code = 400
    console.error('SHOT_ERROR', e.message)
  }
  console.timeEnd(url)
}
