const config = {
    weburl: 'https://candidature.1337.ma/users/sign_in',
    web_auth: {
        email: 'justgink@gmail.com',
        password: 'Itsme;1337;Ginkoe'
    },
    twilio_auth: {
        SID: 'AC3896f47d027f0e8cc19fd5274975ba51',
        TOKEN: '64e2ceecceda24e2eb9a997356c7f622',
        M_NUMBER: '+212660382790'
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
    }
};

module.exports = config;