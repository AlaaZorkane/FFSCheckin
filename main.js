#!/usr/bin/env node
const config = require('./config');

const arg_parser = require('./cli');
const Executer = require('./executer');
const CronJob = require('cron').CronJob;
const entry = arg_parser(process.argv);

const notifier = require('./notifier/mobile');

// Alarm if the program crashes
process.on('beforeExit', (code) => {
    if (entry.watch) {
        notifier.sms("Program is exiting for some reason !!", true);
        //console.log(`About to exit with code: ${code}`);
    }
});

// Program entry
if (entry.loop) {
    let _schedule = entry.cron ? entry.cron : config.cron.schedule;
    new CronJob(_schedule, () => {
        console.log("[O][O] Executing again ~ !");
        Executer();
    }, null, true, 'America/Los_Angeles');
} else {
    Executer();
}
//== Time Zone ain't a big deal ~
