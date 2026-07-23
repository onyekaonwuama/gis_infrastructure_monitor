INSERT INTO gis_services (
                          id,
                          name,
                          url,
                          service_type,
                          location,
                          status,
                          response_time_ms
)
VALUES
    (
        'map_service_01',
        'Map Service 01',
        'https://example.com/frankfurt/map-service',
        'map_service',
        ST_SetSRID(ST_MakePoint(8.6821, 50.1109), 4326),
        'healthy',
        180
    ),
    (
        'map_service_02',
        'Map Service 02',
        'https://example.com/berlin/map-service',
        'feature_service',
        ST_SetSRID(ST_MakePoint(13.4050, 52.5200), 4326),
        'degraded',
        2450
    ),
    (
        'map_service_03',
        'Map Service 03',
        'https://example.com/munich/wms',
        'wms',
        ST_SetSRID(ST_MakePoint(11.5820, 48.1351), 4326),
        'down',
        NULL
    )
ON CONFLICT (id) DO UPDATE
SET
                            name = EXCLUDED.name,
                            url = EXCLUDED.url,
                            service_type = EXCLUDED.service_type,
                            location = EXCLUDED.location,
                            status = EXCLUDED.status,
                            response_time_ms = EXCLUDED.response_time_ms,
                            updated_at = CURRENT_TIMESTAMP;