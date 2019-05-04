const config = {
    weburl: 'https://candidature.1337.ma/users/sign_in',
    //weburl: 'http://35.204.193.179:8080/',
    web_auth: {
        email: 'justgink@gmail.com',
        password: 'Itsme;1337;Ginkoe'
    },
    twilio: {
        SID: 'AC3896f47d027f0e8cc19fd5274975ba51',
        TOKEN: '64e2ceecceda24e2eb9a997356c7f622',
        FROM_NUMBER: '+12024105093',
        TO_NUMBER: '+212660382790',
    },
    hints: {
        closed_message: "De nouveaux creneaux ouvriront prochainement",
        opened_message: "OPTIONAL",
        selectors: {
            $username: '#user_email',
            $password: '#user_password',
            $login_button: '.form-actions .btn',
            $checkin_button: ''
        }
    },
    browser: {
        resolution: {
            width: 1366,
            height: 1000
        }
    },
    cron: {
        schedule: '*/30 * * * *'
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