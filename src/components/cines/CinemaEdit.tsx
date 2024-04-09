import CinemaForm from "./CinemaForm";

const CinemaEdit=()=>{
    return(
        <div className="w-full justify-center max-w-5xl  my-4 flex-col flex items-center">
            {/* ,  */}
        <CinemaForm 
        coordenadas={[{latitud:19.39690327565558,longitud:-99.0954799749956}]}
        nombre="Cinepolis"
        />
        </div>
    )
}
export default CinemaEdit;