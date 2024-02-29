import { useState } from 'react';
import { ErrorAlert } from '../components/layout/feedback/error-alert';
import { Loading } from '../components/layout/feedback/loading';
import { useBuildingsQuery } from '../hooks/api-query';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import PlaceIcon from '@mui/icons-material/Place';
import { JsonBuilding } from '@shared-utils';
import Typography from '@mui/material/Typography';

interface Viewport {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface MapWidgetParams {
  onBuildingSelect: (building: JsonBuilding) => void;
  selectedBuilding?: JsonBuilding;
}

const portugalLatLon = {
  latitude: 39.3999,
  longitude: -8.2245,
};

export const MapWidget = ({
  onBuildingSelect,
  selectedBuilding,
}: MapWidgetParams) => {
  const { buildings = [], isLoading, isError } = useBuildingsQuery();

  const [viewPort, setViewPort] = useState<Viewport>({
    ...portugalLatLon,
    zoom: 5,
  });

  const [popupInfo, setPopupInfo] = useState<JsonBuilding | null>(null);

  if (isLoading) {
    return <Loading text={'Loading Map...'} />;
  }

  if (isError) {
    return <ErrorAlert />;
  }

  return (
    <div style={{ width: '100%', height: '70vh' }}>
      <ReactMapGl
        {...viewPort}
        mapStyle="mapbox://styles/soniameller/cjxnds7b802wq1cny5j2m0rkv"
        mapboxApiAccessToken={process.env.NX_REACT_APP_MAPBOX_TOKEN}
        width="100%"
        height="100%"
        onViewportChange={(nextViewPort: Viewport) => setViewPort(nextViewPort)}
      >
        {buildings.map((building: JsonBuilding) => (
          <Marker
            key={building.cpe}
            latitude={building.lat}
            longitude={building.lon}
            onClick={() => onBuildingSelect(building)}
          >
            <PlaceIcon
              onMouseOver={() => setPopupInfo(building)}
              cursor={'pointer'}
              color={
                selectedBuilding?.cpe === building.cpe ? 'secondary' : 'inherit'
              }
            />
          </Marker>
        ))}
        {popupInfo && (
          <Popup
            latitude={popupInfo.lat}
            longitude={popupInfo.lon}
            anchor="top"
            closeButton={true}
            onClose={() => setPopupInfo(null)}
            onClick={() => onBuildingSelect(popupInfo)}
          >
            <div>
              <Typography variant="subtitle2">{popupInfo.name}</Typography>
              <Typography variant="body2">
                <b>Address:</b> {popupInfo.fulladdress}
              </Typography>
              <Typography variant="body2">
                <b>Total Area:</b> {popupInfo.totalarea}m²
              </Typography>
            </div>
          </Popup>
        )}
      </ReactMapGl>
    </div>
  );
};
