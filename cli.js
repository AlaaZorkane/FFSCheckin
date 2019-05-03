const PKG_JSON = require('./package.json');
const parser = require('commander');

module.exports = (args) => {
    parser
    .version(PKG_JSON.version)
    .option('-l, --loop', 'Loop the check for every CRON Job')
    .option('-s --screen', 'Take screenshots for future debugging')
    .option('-c --cron [scheduler]', 'Use custom cronjob schedule')
    .option('-w --watch', 'Notify with an SMS if the program is exiting')
    .option('-n --notifier [type]', 'Using either SMS(sms) or CALL(call)')
    .option('-d --debug', 'Activate test scopes')
    .parse(args);
    
    return parser
}