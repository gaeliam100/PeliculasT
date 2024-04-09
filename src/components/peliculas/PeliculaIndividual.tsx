import { pelicula } from "./peliculas.model"
export const PeliculaIndividual = (props:PeliculaIndividualProps) => {
    const {id,poster,titulo} = props.pelicula
    const construirLink = () => {
        return `/pelicula/${id}`
    }
return(
    <div className="flex justify-center items-center flex-col">
        <a href={construirLink()}>
            <img src={poster} alt="Poster de pelicula" className=" max-w-[12rem] rounded-md hover:scale-105 ease-in duration-75" />
        </a>
        <p className="my-2 text-xl">
            <a href={construirLink()}>{titulo}</a>
        </p>
    </div>
)
}
interface PeliculaIndividualProps {
    pelicula: pelicula
}