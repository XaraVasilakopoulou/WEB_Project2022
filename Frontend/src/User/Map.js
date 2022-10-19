import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'

export const Map = ()=> {
        
return (
<MapContainer style={{height:'700px'}} center={[38.24, 21.73]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[38.2466, 21.7345]}>
    <Popup>
      COVID IS THERE <br /> STAY SAFE BUDDY.
    </Popup>
  </Marker>
</MapContainer>
);
}