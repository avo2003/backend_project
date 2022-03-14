import express, { Request, Response } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerOptions';
// const mongoose = require('mongoose');
import mongoose from "mongoose";
import "dotenv/config";
const app = express();
// const bodyParser = require('body-parser')
import * as bodyParser from 'body-parser';
require('dotenv/config');
import postsRoute from './router/posts';

const swaggerDocs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(bodyParser.json());

app.use('/posts', postsRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('home');
});

mongoose.connect(`${process.env.DB}`).catch((error: Error) => console.log(error));
app.listen(3000);
