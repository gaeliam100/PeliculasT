import { cineCreacionDTO } from "../cines/coordenadas.model";

export interface pelicula {
id:number,
titulo:string,
poster:string,
}
export interface peliculaCreacionDTO{
titulo?:string;
enCines?:boolean;
trailer?:string;
fechaLanzamiento?:Date;
poster?:string;
posterURL?:string;
generosIds?:number[];
generoSeleccionado?:generoDTO[];
generoNoSeleccionado?:generoDTO[];
cineSeleccionado?:cineCreacionDTO[];
cineNoSeleccionado?:cineCreacionDTO[];
}
export interface landingPageDTO{
    enCartelera?:pelicula[];
    proximosEstrenos?:pelicula[];
}