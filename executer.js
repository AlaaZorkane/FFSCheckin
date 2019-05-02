const config = require('./config');
const {email, password} = config.web_auth;
const resolution = config.browser.resolution;
const screenshot = require('./screenshots');
const notifier = require('./notifier/mobile');

const puppeteer = require('puppeteer');
const fs = require('fs').promises;

const Executer = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const override = Object.assign(page.viewport(), resolution);
    await page.setViewport(override);
    
    await page.goto(config.weburl);
    
    await screenshot.take(page, 'login');
    //console.log("[+] Taking a screenshot");
    //await page.screenshot({path: 'screenshots/login_page.png'});

    console.log("[+] Surfing to the page", config.weburl);
    await page.goto(config.weburl, {
        waitUntil: 'load'
    });

    // TODO : Implement in a function later
    console.log("[+] Page loaded", page.url());

    // Logging in

    console.log("[+] Logging in using", email);
    await page.type('#user_email', email);
    await page.type('#user_password', password);
    await page.click('.form-actions .btn');
    await page.waitForNavigation();
    console.log("[+] Logged in successfully ~", page.url());

    // Taking a screenshot of the check-in page for captcha verification
    await screenshot.take(page, 'checkin');

    // Pulling the DOM
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);

    // Checking if Check-ins are open or not
    if (bodyHTML.includes(config.hints.closed_message)) {
        console.log("\nCheck-ins are closed");
    } else {
        console.log("\nCheck-ins are open !!!!");
        //== SEND SMS IN CASE==//
        notifier.sms();
        //== Auto check-in ==//
        await page.click('.btn .btn-primary .js-meeting-0');
        await page.waitForNavigation();
    }

    //[(#tests)]//
    const hrefs = await page.$$eval('a', as => as.map(a => a.href));
    console.log(hrefs);

    await browser.close();
};

module.exports = Executer;