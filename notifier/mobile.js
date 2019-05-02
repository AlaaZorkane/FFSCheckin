const { SID, TOKEN, FROM_NUMBER, TO_NUMBER } = require('../config').twilio;

const client = require('twilio')(SID, TOKEN);

const notifier = {
    sms: () => {
        client.messages
            .create({ from: FROM_NUMBER, body: 'Check-in OPEN !!', to: TO_NUMBER })
            .then(message => console.log("SMS SENT", message.sid));
    }
}

module.exports = notifier;