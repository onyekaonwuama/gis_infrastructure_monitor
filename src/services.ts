import type {GisService} from "./types.js";

export const gisServices: GisService[] = [
    {
        id: 'map_servcie_01',
        name: 'Map Service 01',
        url: 'https://example.com/frankfurt/map-service',
        serviceType: 'map_service',
        latitude: 50.1109,
        longitude: 8.6821,
        status: 'healthy',
        responseTimeMs: 180
    },
    {
        id: 'map_servcie_02',
        name: 'Map Service 02',
        url: 'https://example.com/berlin/map-service',
        serviceType: 'feature_service',
        latitude: 52.52,
        longitude: 13.405,
        status: 'degraded',
        responseTimeMs: 2450
    },
    {
        id: 'map_servcie_03',
        name: 'Map Service 03',
        url: 'https://example.com/munich/wms',
        serviceType: 'wms',
        latitude: 48.1351,
        longitude: 11.582,
        status: 'down',
        responseTimeMs: null
    }

];