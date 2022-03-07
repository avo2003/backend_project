import express, { Request, Response } from 'express';

const mongoose = require('mongoose');
const app = express();
// const bodyParser = require('body-parser')
import * as bodyParser from 'body-parser';
require('dotenv/config');
const postsRoute = require('./router/posts');

app.use(bodyParser.json());

app.use('/posts', postsRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('home');
});

// mongoose.connect(process.env.DB,
// ()=>console.log('connected'));

mongoose.connect(process.env.DB).catch((error: Error) => console.log(error));
app.listen(3000);
