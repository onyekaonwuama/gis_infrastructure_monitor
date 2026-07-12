import express, {type Request,  type Response } from 'express';

const app = express();

const port = 3000;

//set home page
app.get('/', (_request: Request, response: Response)=> {
    response.send("GIS Infrastructure is running");});
//heath check route
app.get('/health', (_request: Request, response: Response) => {
    response.json({
        status: 'healthy',
        application: 'gis-infrastructure-monitor',
        timestamp: new Date().toISOString()
    });
});

//listening ports
app.listen(port, () => {
    console.log("GIS Infrastructure Monitor is running.")
    console.log(`Application http:localhost:${port}`);
    console.log(`Health: http;localhost:${port}/health`);
})
