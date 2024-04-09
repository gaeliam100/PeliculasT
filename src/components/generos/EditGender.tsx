import GenerosForm from "./GenerosForm";
const EditGender: React.FC = () => {
    return (
        <section className="h-full w-full ">
            <GenerosForm modelo={{genero:'Acción'}}/>
        </section>
    );
};
export default EditGender;