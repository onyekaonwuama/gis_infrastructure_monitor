import express, {type Request,  type Response } from 'express';

const app = express();

const port = 3000;

//set home page
app.get('/', (_request: Request, response: Response)=> {
    response.send("GIS Infrastructure is running");});

//log port listening
app.listen(port, () => {
    console.log("GIS Infrastructure Monitor is running.")
    console.log(`Open http:localhost:${port}`);
})
