import React, { useState } from "react";
import { peliculaCreacionDTO } from "../components/peliculas/peliculas.model";
import { generoDTO } from "../components/generos/generos.mode";
import { cineCreacionDTO } from "../components/cines/coordenadas.model";
export const usePeliculasForm = ({titulo='',enCines,trailer,fechaLanzamiento,posterURL,generoSeleccionado,generoNoSeleccionado,cineSeleccionado,cineNoSeleccionado}:peliculaCreacionDTO) => {
    const [gSeleccionados,setGSeleccionados]=useState(generoSeleccionado || []);
    const [gNoSeleccionados,setGNoSeleccionados]=useState(generoNoSeleccionado);
    const [cSeleccionados,setCSeleccionados]=useState(cineSeleccionado||[]);
    const [cNoSeleccionados,setCNoSeleccionados]=useState(cineNoSeleccionado || []);
    const [tituloE, setTituloE] = useState(titulo);
    const [enCinesE, setEnCinesE] = useState(enCines);
    const [trailerE, setTrailerE] = useState(trailer);
    const [fechaLanzamientoE, setFechaLanzamientoE] = useState<Date>(fechaLanzamiento||new Date());
    const [posterE, setPosterE] = useState('');
    const [posterURLE, setPosterURLE] = useState(posterURL);

    const handleImageChange = (imagenBase64:string) => {
        setPosterE(imagenBase64);
        setPosterURLE('');
    };
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => setTituloE(e.currentTarget.value);
    const handleTrailerChange = (e:React.ChangeEvent<HTMLInputElement>) => setTrailerE(e.currentTarget.value);
    const handleFechaChange = (e:React.ChangeEvent<HTMLInputElement>) => setFechaLanzamientoE(new Date(e.currentTarget.value + "T00:00:00"));
    const handleEnCinesChange = (e:React.ChangeEvent<HTMLInputElement>) => setEnCinesE(e.currentTarget.checked);
    const handleSubmit = (e:React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = { 
            titulo: tituloE, 
            enCines: enCinesE, 
            trailer: trailerE, 
            fechaLanzamiento: fechaLanzamientoE, 
            poster: posterE, 
            posterURL: posterURLE,
            generosIds: gSeleccionados.map(g=>g.id),
            cinesIds: cSeleccionados.map(c=>c.id)
        };
        console.log(formData);
    };
    const handleChangeGeneros =(selected:generoDTO[],noSelected:generoDTO[])=>{
        setGSeleccionados(selected);
        setGNoSeleccionados(noSelected);
    }
    const handleCinesChange =(selected:cineCreacionDTO[],noSelected:cineCreacionDTO[])=>{
        setCSeleccionados(selected);
        setCNoSeleccionados(noSelected);
    }
    return {
        tituloE,
        enCinesE,
        trailerE,
        fechaLanzamientoE,
        posterE,
        gSeleccionados,
        gNoSeleccionados,
        cSeleccionados,
        cNoSeleccionados,
        posterURLE,
        handleImageChange,
        handleChange,
        handleChangeGeneros,
        handleCinesChange,
        handleTrailerChange,
        handleFechaChange,
        handleEnCinesChange,
        handleSubmit,
    };
}