import { Router } from 'express';
import SenderController from '@controllers/SenderController';

const routes = Router();
const Sender = new SenderController;


/*
sender routes
*/

routes.post('/send', Sender.send);

/*
fim sender routes
 */

export default routes;