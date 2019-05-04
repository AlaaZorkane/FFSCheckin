const config = {
    weburl: 'https://candidature.1337.ma/users/sign_in',
    web_auth: {
        email: 'alaazorkane@gmail.com',
        password: 'B4v9_Uf'
    },
    twilio: {
        SID: 'AC0cc48282776254db19ff8c4685bee797',
        TOKEN: 'f5bcf9240560be212d937072daf5df6b',
        FROM_NUMBER: '+19164680697',
        TO_NUMBER: '+212694106628',
    },
    hints: {
        closed_message: "De nouveaux creneaux ouvriront prochainement",
        opened_message: "OPTIONAL",
        selectors: {
            $username: '[name="user[email]"]',
            $password: '[name="user[password]"]',
            $login_button: '[name="commit"]',
            $checkin_button: '.js-meeting-0'
        }
    },
    browser: {
        resolution: {
            width: 1366,
            height: 1000
        }
    },
    cron: {
        schedule: '*/2 * * * *'
    },
    // WIP
    winston: {
        levels: {
            error: 0,
            warn: 1,
            info: 2,
            verbose: 3,
            debug: 4,
            silly: 5
        },
        colors: {
            silly: 'magenta',
            verbose: 'cyan',
            debug: 'blue',
            error: 'red',
            warn: 'yellow',
            info: 'green'
        }
    }
};

module.exports = config; 