import { Form } from "react-router-dom";
import {   useState } from "react";
import TextInput from "../TextInput";
import Mapa from "../Mapa";
import Button from "../Button";
const CinemaForm = ({nombre,coordenadas}:coordenadasForm) => {
    const [cine, setCine] = useState(nombre);
    const [coordenada,setcCoordenada]=useState<coordenadasDTO[]>(coordenadas||[]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCine(event.currentTarget.value);
      };
      const handleClicked=(coordenadas:coordenadasDTO)=>{
        console.log(coordenadas);
        setcCoordenada([coordenadas]);
      }
      const handleSubmit = (event:React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = {
            cine: form.cine.value, 
            latitud:coordenada[0].latitud,
            longitud:coordenada[0].longitud
        };
        console.log(formData);
    }

    return (
      <section className="w-full">
    <Form method="post" onSubmit={handleSubmit}>
     <TextInput
      name="cine"
      value={cine}
      type="text"
      onChange={handleChange}
      label="Cine"
      placeholder="Cinepolis cinemex..."
      />
      <div className="my-4 w-full flex ">
        <Mapa 
        coordenadas={coordenada}
        manejarCoordenadas={handleClicked}
        />
      </div>
      <div className="w-full">
        <div className="flex justify-start">
        <Button text="Crear" type="submit" />
        <Button text="Cancelar" type="button" />
        </div>
      </div>
     </Form>
      </section>

    )
}
interface coordenadasForm{
nombre?:string;
coordenadas?:coordenadasDTO[];
}
export default CinemaForm;