import ActorForm from "./ActorForm";

const EditarActor = () => {
    return(
        <div className="flex items-center flex-col">
            <ActorForm
            modelo={{
                nombre:'Emma Stone',
                fechaNacimiento:new Date('1988-11-06T00:00:00'),
                imgURL:'https://c4.wallpaperflare.com/wallpaper/930/266/448/emma-stone-portrait-face-actress-wallpaper-preview.jpg',
                biografia:'**Emma Stone** es una actriz estadounidense. Nacida en Scottsdale, Arizona, Stone comenzó a actuar a una edad temprana, con su primer papel en una obra de teatro a los once años. A los dieciséis años, hizo su debut en televisión y, más tarde, ganó reconocimiento por sus papeles en Superbad y Zombieland.'
            }}
            />
        </div>
    )
}
export default EditarActor;