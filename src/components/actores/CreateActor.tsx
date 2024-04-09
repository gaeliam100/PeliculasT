import ActorForm from "./ActorForm";

const CreateActor = () => {
    return(
        <div className="flex justify-center items-center flex-col">
            <ActorForm
            modelo={{
                nombre:'',
                fechaNacimiento:new Date(),
            }}
            />
        </div>
    )
}
export default CreateActor;