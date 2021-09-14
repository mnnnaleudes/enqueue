import amqp = require('amqplib/callback_api');

class Sender {

    async create(queue: string, msg: string) {

        amqp.connect('amqp://localhost', function (error0, connection) {
            if (error0) {
                throw error0;
            }

            connection.createChannel(function (error1, channel) {

                if (error1) {
                    throw error1;
                }

                channel.assertQueue(queue, {
                    durable: false
                });

                channel.sendToQueue(queue, Buffer.from(msg));
                console.log(" [x] Sent %s", msg);

            });
        });

    }
}

export default Sender;