const Executer = require('./executer');
const CronJob = require('cron').CronJob;

const _arg = process.argv[2];

switch (_arg) {
    case "loop":
        new CronJob('* * * * * *', () => {
            console.log("[O][O] Executing again ~ !");
            Executer();
        }, null, true, 'America/Los_Angeles');
        break;

    default:
        Executer();
        break;
}

//== Time Zone ain't a big deal ~
