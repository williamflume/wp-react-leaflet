import { LatLng } from 'leaflet';
import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup, withLeaflet } from 'react-leaflet';
import { ReactLeafletSearch } from 'react-leaflet-search';
import hotSpotData from './new_spots.json';
import CSSTransition from 'react-transition-group';
import './index.css';
import Typist from 'react-typist';

class App extends Component {
  
  componentDidMount() {
      setTimeout(()=> {
        document.getElementById("findHotspot").setAttribute("style", "display: none");
      }, 8000);
  }

  render() {
    const initLat = -25.7479;
    const initLng = 28.2293;
    let initPosition = [initLat, initLng];
    //const searchComponent = (props) => <ReactLeafletSearch position="topleft" />;
    const ReactLeafletSearchComponent = withLeaflet(ReactLeafletSearch);
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
           <div style={{ marginLeft: "80%", marginTop: "5px" }}>
           <ReactLeafletSearchComponent provider="OpenStreetMap" providerOptions={{ region: "za"}} openSearchOnLoad={true} zoom={14} />
           
         <Typist><div className='pointer' id='findHotspot' style={{ fontWeight: "bold", fontFamily: "inherit", color: "lightgreen", fontSize: "16pt"}}>
           <Typist.Delay ms={2000} />
           <Typist.Backspace count={4} delay={8} />
           Find a Hotspot</div></Typist>
           
     
          
           </div>
           
           
            
            
        
        </Map>
      
    )
  }
}

export default App;
