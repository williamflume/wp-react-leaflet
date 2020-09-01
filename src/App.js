import { LatLng } from 'leaflet';
import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { ReactLeafletSearch, SearchControl } from 'react-leaflet-search';
import hotSpotData from './new_spots.json';

class App extends Component {

  render() {
    const initLat = -25.7479;
    const initLng = 28.2293;
    let initPosition = [initLat, initLng];
    //const searchComponent = (props) => <ReactLeafletSearch position="topleft" />;

    return (
      
        <Map center={initPosition} zoom={10}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href=&quothttp://osm.org/copyright&quot;>OpenStreetMap</a> contributors' />
      
          
      {
             hotSpotData.map(hotspot => (
               <Marker 
                  key={hotspot.name}
                  position={[hotspot.latitude, hotspot.longitude]}
                >
                  <Popup><h4>{hotspot.name}</h4></Popup>
                </Marker>
                
             ))
           }
           <SearchControl />
            
            
        
        </Map>
      
    )
  }
}

export default App;
