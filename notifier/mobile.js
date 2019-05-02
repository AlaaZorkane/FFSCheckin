const { SID, TOKEN, M_NUMBER } = require('../config').twilio_auth;

const client = require('twilio')(SID, TOKEN);

const notifier = {
    sms: () => {
        client.messages
            .create({ from: '+12024105093', body: 'Check-in OPEN !!', to: M_NUMBER })
            .then(message => console.log("SMS SENT", message.sid));
    }
}

module.exports = notifier;