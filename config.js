const config = {
    weburl: 'https://candidature.1337.ma/users/sign_in',
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
        opened_message: "OPTIONAL"
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
            foo: 0,
            bar: 1,
            baz: 2,
            foobar: 3
        },
        colors: {
            foo: 'blue',
            bar: 'green',
            baz: 'yellow',
            foobar: 'red'
        }
    }
};

module.exports = config; 