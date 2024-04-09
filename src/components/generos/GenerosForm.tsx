import { Form, useActionData, useNavigation } from "react-router-dom";
import TextInput from "../TextInput";
import Button from "../Button";
import { useEffect, useState } from "react";
import { generoCreacionDTO } from "./generos.mode";


const GenerosForm=(props:GenerosFormProps)=>{
    const {modelo}=props;
    const navigation = useNavigation();
    const errors=useActionData() as {error:string};
    const [errorS, setErrorS] = useState(errors?.error);
    const [genero, setGenero] = useState(!modelo?.genero?'':modelo.genero);
    useEffect(()=>{
      setErrorS(errors?.error);
    },[errors])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setGenero(e.target.value);
    }
    return (
        <Form method="post" id="genero-form" >
        <div className="flex flex-col items-center p-8">
        <TextInput 
        label="Nombre" 
        name="genero"
        value={genero}
        onChange={handleChange}
        required
        placeholder="Acción Aventura Comedia" 
        type="text" />  
        <div className="mt-6 justify-center flex flex-col items-center w-full">
        <Button text="Crear Género"  type="submit" disabled={navigation.state === "submitting"} />
          {errorS && <span className="text-red-500 my-4">{errorS}</span>}
        </div>
        </div>
        </Form>
    );
}
interface GenerosFormProps {
modelo?:generoCreacionDTO,

}
export default GenerosForm