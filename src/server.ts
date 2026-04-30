import express from 'express';
import router from './routes/home.route';

const app = express(); 

app.use("/api/", router)

app.listen(3000, () => {
    console.log("Server is running")
})