const { SID, TOKEN, FROM_NUMBER, TO_NUMBER } = require('../config').twilio;

const client = require('twilio')(SID, TOKEN);

const notifier = {
    sms: (desc) => {
        client.messages
            .create({ from: FROM_NUMBER, body: desc ? desc : "Notified for some reason :shrug:", to: TO_NUMBER })
            .then(message => console.log("SMS SENT", message.sid));
    },
    call: () => {
        //== WIP ==
        client.calls
            .create({
                url: 'http://demo.twilio.com/docs/voice.xml',
                method: 'GET',
                to: TO_NUMBER,
                from: FROM_NUMBER
            })
            .then(call => console.log(call.sid))
            .done();
    }
}

module.exports = notifier;