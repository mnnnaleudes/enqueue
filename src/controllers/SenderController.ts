import {Request, Response} from 'express';

class SenderController {

    async send(req: Request, res: Response) {

        return res.status(200).send();

    }

}

export default SenderController;