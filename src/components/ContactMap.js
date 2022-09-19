import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export const ContactMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

function Map() {
  const center = useMemo(
    () => ({ lat: 41.008135631028225, lng: 28.951109307810082 }),
    []
  );

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName='map-container'>
      <Marker position={center} />
    </GoogleMap>
  );
}
