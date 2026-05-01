import express from 'express';
import router from './routes/home.route.ts';
import {} from '@codegenie/serverless-express'

const app = express(); 

app.use("/api/", router)

export default  app