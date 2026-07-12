export type ServiceStatus =
    | 'healthy'
    | 'degraded'
    | 'down'
    | 'unknown'

export type GisServiceType =
    | 'feature_service'
    | 'map_service'
    | 'image_service'


export interface GisService {
    id : string;
    name: string;
    url: string;
    serviceType: GisServiceType;
    latitude: number;
    longitude: number;
    status: ServiceStatus;
    responseTimeMs: number | null

}

