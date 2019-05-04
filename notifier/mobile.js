const { SID, TOKEN, FROM_NUMBER, TO_NUMBER } = require('../config').twilio;

const client = require('twilio')(SID, TOKEN);

const notifier = {
    sms: (desc, alert) => {
        client.messages
            .create({ from: FROM_NUMBER, body: desc ? desc : "SOMETHING IS GOING ON !", to: TO_NUMBER })
            .then(message => {
                console.log("SMS SENT", message.sid);
                if (alert) process.exit();
            })
    },
    call: (alert) => {
        //== WIP ==
        client.calls
            .create({
                url: 'http://demo.twilio.com/docs/voice.xml',
                method: 'GET',
                to: TO_NUMBER,
                from: FROM_NUMBER
            })
            .then(call => {
                console.log(call.sid);
            })
            .catch(e => {
                console.log("Fuck you, you and your error !");
            })
            .done(() => {
                console.log("Call done");
            });
    }
}

module.exports = notifier;