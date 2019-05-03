const config = require('./config');
const {email, password} = config.web_auth;
const resolution = config.browser.resolution;
const screenshot = require('./screenshots');
const notifier = require('./notifier/mobile');

const puppeteer = require('puppeteer');
const fs = require('fs').promises;

const Executer = async (logger, entry) => {
    logger.info(`Executing the Check-in process ~`);
    logger.verbose('Setting up the browser');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const override = Object.assign(page.viewport(), resolution);
    await page.setViewport(override);
    
    logger.verbose(`Navigate to the Login page : ${config.weburl}`);
    await page.goto(config.weburl, {
        waitUntil: 'load'
    });
    logger.verbose(`Reached : ${page.url()}`)
    await screenshot.take(page, 'login', entry.screen, logger);

    // Logging in

    logger.verbose(`Entering creditentials ~`);
    logger.verbose(`Connecting with email : ${email}`);
    await page.type('#user_email', email);
    logger.verbose(`Connecting with password : ****`);
    await page.type('#user_password', password);
    logger.verbose(`Clicking on the login button`);
    await page.click('.form-actions .btn');
    await page.waitForNavigation();
    logger.verbose(`Reached : ${page.url()}`)
    
    await screenshot.take(page, 'checkin', entry.screen, logger);

    logger.verbose('Pulling the DOM ~');
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);

    logger.verbose('Testing if check-ins are open');
    
    if (bodyHTML.includes(config.hints.closed_message)) {
        logger.warn('Check-ins are closed')
    } else {
        logger.warn('Check-ins ARE OPEN !!')
        logger.verbose('Notify with chosen option');
        //== SEND SMS IN CASE==//
        switch (entry.notifier) {
            case "sms":
                notifier.sms('CHECK INS ARE OPEN !')
                break;
            // Default Call
            default:
                notifier.call()
                break;
        };

        //== Auto check-in ==//
        logger.verbose('Auto-Check in');
        await page.click('.btn.btn-primary.js-meeting-0')
            .catch(err => { if (err) notifier.sms('Failed to auto-checkin RUN AND CHECK IN URSELF', true) })
        await page.waitForNavigation();
        await screenshot.take(page, 'aftercheckin', entry.screen, logger);

        logger.info('Exiting lets hope we got the check-in :c ');
        process.exit();
    }

    //[(#tests)]//
    if(entry.debug) {
        const hrefs = await page.$$eval('a', as => as.map(a => a.href));
        console.log(hrefs);
    }

    await browser.close();
};

module.exports = Executer;