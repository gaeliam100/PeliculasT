import PeliculasForm from "./PeliculasForm";

const PeliculaEditar = () => {
    return (
        <PeliculasForm 
        modelo={{
            titulo: "Spiderman",
            enCines: true,
            trailer: "https://youtu.be/t06RUxPbp_c?si=WFX4NB5tnzbkvYHH",
            fechaLanzamiento: new Date(),
            posterURL: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTTQbtas_si2xfv23g_NwoKkO8oU7IxhPqivnafWe58LHi8Tin",
        }}
        />
    );
    }
    export default PeliculaEditar;