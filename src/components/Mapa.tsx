import { MapContainer,Marker,TileLayer, useMapEvent } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import  {  useState } from 'react';
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;
const ClickMap=(props:clickMapaProps)=>{
    useMapEvent('click',(e)=>{
        const coord = e.latlng;
        props.setPunto({latitud:coord.lat,longitud:coord.lng});
    });
return null;
}



interface clickMapaProps{
    setPunto(coordenadas:coordenadasDTO):void;
}
const Marcador=({longitud,latitud}:coordenadasDTO)=>{

    return(
        <Marker
         draggable
         position={[latitud,longitud]}

         />
    )
}
const Mapa = ({coordenadas=[{latitud:0,longitud:0}],manejarCoordenadas}:coordenadasInterface) => {
    const [coordenada,setcCoordenada] = useState<coordenadasDTO[]>(coordenadas);
    return (
        <div className='w-full'>
            <MapContainer center={coordenada.length<=0?[19.329164080464963, -99.12393592081557]:[coordenada[0].latitud,coordenada[0].longitud]} zoom={24} className='w-full h-[500px]' >
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/gaelivan740/clug0gs1j02ul01qq2lbnhwpo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2FlbGl2YW43NDAiLCJhIjoiY2x1ZzBsNWFjMjgydjJzbGRxbXJicG94dyJ9.pTuB2AKBMqCN_KHyHZNIIA"
                    attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
                />
                <ClickMap setPunto={(coordenadas)=>{
                    setcCoordenada([coordenadas]);
                    manejarCoordenadas(coordenadas);
                }}/>
                {coordenada.map((coordenada,index)=>(
                    <Marcador key={index} latitud={coordenada.latitud} longitud={coordenada.longitud} />
                ))
                }
            </MapContainer>
        </div>
    )
}
export interface coordenadasInterface{
    coordenadas:coordenadasDTO[];
    manejarCoordenadas:(coordenadas:coordenadasDTO)=>void;
}
export default Mapa;