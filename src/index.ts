import express, {type Request,  type Response } from 'express';
import { gisServices} from "./services.js";

const app = express();

const port = 3000;

app.use(express.json());

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

//get services route
app.get('/api/services', (_request: Request, response: Response) => {
    const geoJson = {
        type: 'FeatureCollection',
        features: gisServices.map((service) => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [
                    service.longitude,
                    service.latitude
                ]
            },
            properties: {
                id: service.id,
                name: service.name,
                url: service.url,
                serviceType: service.serviceType,
                status: service.status,
                responseTimeMs: service.responseTimeMs

            }
        }))
    };
    response.json(geoJson)
})
//listening ports
app.listen(port, () => {
    console.log("GIS Infrastructure Monitor is running.")
    console.log(`Application http://localhost:${port}`);
    console.log(`Health: http://localhost:${port}/health`);
    console.log(`Services: http://localhost:${port}/api/services`)
})
