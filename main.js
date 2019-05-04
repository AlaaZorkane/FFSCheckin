#!/usr/bin/env node
const config = require('./config');
require('http').createServer().listen(8080)

const arg_parser = require('./cli');
const Executer = require('./executer');
const entry = arg_parser(process.argv);
const notifier = require('./notifier/mobile');

const logger = require('./logger');

const CronJob = require('cron').CronJob;



// Alarm if the program crashes
process.on('beforeExit', (code) => {
    if (entry.watch) {
        notifier.sms("Program is exiting for some reason !!", true);
        logger.warn('Program is exiting for some sort of reason !');
    }
});

// Program entry
if (entry.loop) {
    let _schedule = entry.cron ? entry.cron : config.cron.schedule;

    logger.info(`Entering loop mode with cron schedule : ${_schedule}`)
    new CronJob(_schedule, () => {
        Executer(logger, entry);
    }, null, true, 'America/Los_Angeles');
} else {
    logger.info(`Entering single time use mode ~ !`);
    Executer(logger, entry);
}
//== Time Zone ain't a big deal ~
