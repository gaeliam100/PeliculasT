import { PeliculaIndividual } from "./PeliculaIndividual"
import { pelicula } from "./peliculas.model"
import { LoaderC } from "../loaders/LoaderC"
export  const ListadoPeliculas=(props:listadoPeliculasProps)=>{
    const {peliculas}=props
    if(!peliculas){
        return <LoaderC/>
    }else if (peliculas.length===0){
        return <>'No hay peliculas'</>
    }else{
        return(

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 p-8">
                {
                    peliculas.map(pelicula=>(
                        <PeliculaIndividual pelicula={pelicula} key={pelicula.id}/>
                    ))
                }
            </div>
        )
    }
}

interface listadoPeliculasProps{
    peliculas?:pelicula[]
}