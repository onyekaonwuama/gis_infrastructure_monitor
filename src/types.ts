export type ServiceStatus =
    | 'healthy'
    | 'degraded'
    | 'down'
    | 'unknown'

export type GisServiceType =
    | 'feature_service'
    | 'map_service'
    | 'image_service'
    | 'wms'

//interface of services in the infrastructure
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

