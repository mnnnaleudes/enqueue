import {Request, Response} from 'express';
import Sender from '@services/Sender';

class SenderController {

    async send(req: Request, res: Response) {

        let queue = req.body.queue;
        let message = req.body.message;

        const sendMessage = await Sender.create(queue,message);

        return res.status(200).send();

    }

}

export default SenderController;