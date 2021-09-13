import express from 'express';
import routes from './routes';
//import bodyParser from 'body-parser';

const app = express();

//const path = require('path');

console.log("hey");

app.use(express.json());

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.use(bodyParser.json());

app.use(routes);

export { app };