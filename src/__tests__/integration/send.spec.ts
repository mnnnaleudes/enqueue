import { app } from '../../app';
import request from 'supertest';

describe("Send to queue integration", () =>{

    it("should be able to create a new message in queue", async () => {

        const response = await request(app).post('/send').send();
        console.log(response.body);

    });

});