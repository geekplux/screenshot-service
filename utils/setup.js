const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer');
const puppeteerCore = require('puppeteer-core');
const pptr = puppeteer || puppeteerCore;

const isBrowserAvailable = async browser => {
  try {
    await browser.version();
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
};

exports.getBrowser = (() => {
  let browser;
  let launching;
  return async () => {
    let unlock;
    // eslint-disable-next-line no-unused-expressions
    launching && launching.then && (await launching);
    // eslint-disable-next-line no-return-assign
    launching = new Promise(r => (unlock = r));
    if (!browser || !(await isBrowserAvailable(browser))) {
      if (puppeteer) {
        browser = await pptr.launch({
          args: [
            '--no-sandbox',
            '--headless',
            '--disable-gpu',
            '-—disable-dev-tools'
          ],
          dumpio: true,
          devtools: false
        });
      }

      if (!puppeteer && puppeteerCore) {
        browser = await pptr.launch({
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: chrome.headless
        });
      }

      console.log(`launch done: ${await browser.version()}`);
    }
    unlock();
    return browser;
  };
})();
