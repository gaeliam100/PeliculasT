import { Form } from "react-router-dom";
import TextInput from "../TextInput";
import { peliculaCreacionDTO } from "./peliculas.model";
import CheckBox from "../CheckBox";
import SelectorImagen from "../actores/SelectorImagen";
import Button from "../Button";
import { usePeliculasForm } from "../../hooks/usePeliculasForm";
import Selector from "../Selector";
import TypeAHead from "../TypeAHead";
// import { generoDTO } from "../generos/generos.mode";
// import { useState } from "react";
const PeliculasForm = ({modelo,}:PeliculasFormProps) => {

const {tituloE, enCinesE, trailerE, 
    fechaLanzamientoE, posterE, posterURLE,
    gSeleccionados,gNoSeleccionados,
    cSeleccionados,cNoSeleccionados,
 handleImageChange,handleChangeGeneros,handleCinesChange, handleChange, handleTrailerChange, handleFechaChange, handleEnCinesChange, handleSubmit
} =usePeliculasForm(modelo);

return(
    <section className="w-full flex-col items-center flex justify-center">
        <h1>Formulario de Películas</h1>
        <div className="px-10 md:px-0 w-full max-w-6xl">
        <Form method="post" onSubmit={handleSubmit}>
        <TextInput
            label="Título"
            name="titulo"
            required
            type="text"
            value={tituloE}
            onChange={handleChange}
        />
        <div className="my-4"></div>
         <CheckBox
            name="enCines"
            label="En cines"
            isSelected={enCinesE}
            onCheckboxChange={handleEnCinesChange}
            />   
         <div className="my-4"></div>

            <TextInput
            label="Trailer"
            name="trailer"
            required
            type="text"
            value={trailerE}
            onChange={handleTrailerChange}
        />
                <div className="my-4"></div>
        <TextInput
        label="Fecha de Lanzamiento"
        name="fechaLanzamiento"
        required
        type="date"
        value={fechaLanzamientoE?.toLocaleDateString("en-CA")}
        onChange={handleFechaChange}
        />
        <Selector 
        seleccionados={gSeleccionados || []}
        noSeleccionados={gNoSeleccionados || []}
        onChange={handleChangeGeneros}
        />
        <Selector
        seleccionados={cSeleccionados || []}
        noSeleccionados={cNoSeleccionados || []}
        onChange={handleCinesChange}
        />
        <TypeAHead 
        
        />
        <div className="my-4">
        <SelectorImagen 
        name="poster"
        label="Poster"
        imgU={posterURLE}
        imagen={posterE}
        onImageSelected={handleImageChange}
        required={false}
        />
        </div>
        <div className="flex justify-between">
            <Button text="Guardar" type="submit"/>
            <Button text="Cancelar" type="button"/>
        </div>
        </Form>
        </div>
    </section>
)
}
interface PeliculasFormProps {
modelo:peliculaCreacionDTO
}
export default PeliculasForm;