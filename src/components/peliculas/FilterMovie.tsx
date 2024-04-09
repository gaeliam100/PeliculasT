import { useEffect, useState } from "react";
import { Form, useActionData } from "react-router-dom"; // Asumiendo que existe este componente
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import CheckBox from "../CheckBox";
import Button from "../Button";

const options = [
    { text: "Acción", value: "1" },
    { text: "Aventura", value: "2" },
    { text: "Comedia", value: "3" }
];

const FilterMovie = () => {
    const errors= useActionData() as {error:string};
    const [errorS, setErrorS] = useState(errors?.error);
    const [enCines, setEnCines] = useState(false);
    const [proximosEstrenos, setProximosEstrenos] = useState(false);
    useEffect(()=>{
        setErrorS(errors?.error);
      },[errors])
    const handleEnCinesChange = () => setEnCines(!enCines);
    const handleProximosEstrenosChange = () => setProximosEstrenos(!proximosEstrenos);

    const handleSubmit = (event:React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = {
            nombre: form.nombre.value, 
            generoId:form.genero.value,
            enCines: form.enCines.checked,
            proximosEstrenos: form.proximosEstrenos.checked,
        };
        console.log(formData);
    };


    return (
        <div className="flex items-center flex-col">
            <h1 className="text-2xl my-4">Filtrar Películas</h1>
            <section className="w-full max-w-2xl">
                <Form id="filter-movie" method="post" onSubmit={handleSubmit}>
                    <TextInput label="Nombre" name="nombre" placeholder="Spiderman 2 Avengers 3 Batman Begins" type="text" required />
                    <div className="my-4">
                        <SelectInput name="genero" options={options} />
                    </div>
                    <div className="flex gap-x-4 justify-between my-4">
                        <CheckBox isSelected={enCines} name="enCines" label="En cines" onCheckboxChange={handleEnCinesChange} />
                        <CheckBox isSelected={proximosEstrenos} name="proximosEstrenos" label="Próximos Estrenos" onCheckboxChange={handleProximosEstrenosChange} />
                    </div>
                    <div className="flex justify-between">
                        <Button text="Filtrar" type="submit" />
                        <Button text="Limpiar" type="reset" />
                    </div>
                </Form>
                {errorS && <span className="text-red-500 my-4">{errorS}</span>}
            </section>
        </div>
    );
};

export default FilterMovie;
