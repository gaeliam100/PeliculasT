import { Form } from "react-router-dom";
import TextInput from "../TextInput";
import Button from "../Button";
import SelectorImagen from "./SelectorImagen";
import { actoresCreacionDTO } from "./actores.model";
// import React, { useState } from "react";
import InputMarkDown from "../InputMarkDown";
import {useActorForm} from '../../hooks/useActorForm';

const ActorForm = ({ modelo }: ActorFormProps) => {
  const {
    nombreActor,
    fechaNacimiento,
    imagen,
    imagenU,
    biografia,
    onImageSelected,
    handleChange,
    handleFechaChange,
    handleBiografiaChange,
    handleSubmit,
  } = useActorForm(modelo);
  return (
    <div className="p-8  w-full min-h-screen h-20 overflow-scroll">
      <Form method="post" onSubmit={handleSubmit}>
        <section className="w-full flex justify-between">
        <section className="flex w-full  items-start flex-col p-10">
        <div className="my-4 w-full">
            <SelectorImagen
              name="imagenActor"
              label="Imagen del actor"
              required={false}
              imgU={imagenU}
              imagen={imagen}
              onImageSelected={onImageSelected}
            />
        </div>
          <TextInput
            label="Nombre del actor"
            name="nombre"
            value={nombreActor}
            onChange={handleChange}
            placeholder="Bryan Cranston"
            type="text"
            required
          />
          <div className="my-4"></div>
          <TextInput
            label="Fecha de nacimiento"
            name="fechaNacimiento"
            placeholder="1956-03-07"
            value={fechaNacimiento?.toLocaleDateString("en-CA")}
            onChange={handleFechaChange}
            type="date"
            required
          />
          <InputMarkDown
            label="Biografía"
            name="biografia"
            value={biografia}
            onChange={handleBiografiaChange}
          />
          <div className="my-4 flex justify-start w-full">
            <Button text="Crear Actor" type="submit" />
          </div>
        </section>
        </section>
      </Form>
    </div>
  );
};
interface ActorFormProps {
  modelo: actoresCreacionDTO;
}
export default ActorForm;
