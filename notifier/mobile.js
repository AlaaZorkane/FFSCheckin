const { SID, TOKEN, FROM_NUMBER, TO_NUMBER } = require('../config').twilio;

const client = require('twilio')(SID, TOKEN);

const notifier = {
    sms: () => {
        client.messages
            .create({ from: FROM_NUMBER, body: 'Check-in OPEN !!', to: TO_NUMBER })
            .then(message => console.log("SMS SENT", message.sid));
    },
    call: async () => {
        //== WIP ==
        client.calls
            .create({
                url: 'http://demo.twilio.com/docs/voice.xml',
                to: TO_NUMBER,
                from: FROM_NUMBER
            })
            .then(call => console.log(call.sid));
    }
}

module.exports = notifier;