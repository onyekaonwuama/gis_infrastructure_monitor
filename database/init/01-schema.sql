CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE IF NOT EXISTS gis_services (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    url TEXT NOT NULL,
    service_type VARCHAR(50) NOT NULL,
    location GEOMETRY(Point, 4326) NOT NULL,
    status VARCHAR(20) NOT NULL,
    response_time_ms INTEGER,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT gis_services_status_check
        CHECK (status IN ('healthy', 'degraded', 'down')),
    CONSTRAINT gis_services_response_time_check
        CHECK (response_time_ms IS NULL OR response_time_ms >= 0)
);

CREATE INDEX IF NOT EXISTS idx_gis_services_location
    ON gis_services
    USING GIST (location);
CREATE INDEX IF NOT EXISTS idx_gis_services_status
    ON gis_services (status);
CREATE INDEX IF NOT EXISTS idx_gis_services_type
    ON gis_services (service_type);