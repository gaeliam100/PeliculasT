import { generoDTO } from "../generos/generos.mode";
import PeliculasForm from "./PeliculasForm";

// import { Link,Outlet } from "react-router-dom";
const generosSeleccionados:generoDTO[]=[{id:1,nombre:'acción'}
,{id:2,nombre:'aventura'},{id:3,nombre:'comedia'}];
const generosNoSeleccionados:generoDTO[]=[{id:4,nombre:'drama'},
{ id:5,nombre:'terror'},{id:6,nombre:'romance'},
{ id:7,nombre:'documental'},{id:8,nombre:'ciencia ficción'}];

const cinesSeleccionados=[{id:1,nombre:'Cine1'},{id:2,nombre:'Cine2'}];

const cinesNoSeleccionados=[{id:3,nombre:'Cine3'},{id:4,nombre:'Cine4'}];

const PeliculasIndex=()=>{
    return(
        <PeliculasForm
        // generosSeleccionados={generosSeleccionados}
        // generosNoSeleccionados={generosNoSeleccionados}
            modelo={{
                titulo:'',
                enCines:false,
                trailer:'',
                fechaLanzamiento: new Date(),
                generoSeleccionado:generosSeleccionados,
                generoNoSeleccionado:generosNoSeleccionados,
                cineSeleccionado:cinesSeleccionados,
                cineNoSeleccionado:cinesNoSeleccionados
            }}
        />
    )
}
export default PeliculasIndex;