import React, { useState } from "react";
import { actoresCreacionDTO } from "../components/actores/actores.model";

export const useActorForm = (modelo:actoresCreacionDTO) => {
    const [nombreActor, setNombreActor] = useState(modelo?.nombre);
    const [fechaNacimiento, setFechaNacimiento] = useState(modelo?.fechaNacimiento);
    const [imagen, setImagen] = useState('');
    const [imagenU, setImagenUrl] = useState(modelo?.imgURL);
    const [biografia, setBiografia] = useState(modelo?.biografia);
  
    const onImageSelected = (imagenBase64:string) => {
      setImagen(imagenBase64);
      setImagenUrl("");
    };
  
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => setNombreActor(e.currentTarget.value);
    const handleFechaChange = (e:React.ChangeEvent<HTMLInputElement>) => setFechaNacimiento(new Date(e.currentTarget.value + "T00:00:00"));
    const handleBiografiaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => setBiografia(e.currentTarget.value);
  
    const handleSubmit = (e:React.FormEvent<HTMLElement>) => {
      e.preventDefault();
      const formData = { nombre: nombreActor, fechaNacimiento, imagen, imgURL: imagenU, biografia };
      console.log(formData);
    };
  
    return {
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
    };
  };