import { landingPageDTO} from './../peliculas/peliculas.model'
import { ListadoPeliculas } from './../peliculas/ListadoPeliculas'
// import App from '../../App'
import { useEffect, useState } from 'react'

 const IndexPeliculas = () => {
    const [peliculas,setPeliculas]=useState<landingPageDTO>({})
    useEffect(()=>{
        const timerId=setTimeout(()=>{
          setPeliculas({enCartelera:[
            {
              id:1,
              titulo:'Asteroid City',
              poster:'https://media1.orlandoweekly.com/orlando/imager/u/zoom/34403527/asteroid-city.jpg?cb=1686647127'
            },
            {
              id:2,
              titulo:'Resident Evil',
              poster:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIogZjjcRCK8RUhz5PSHtR1G5GiELsu-6wlXScyX714VmkT8No'
            },
            {
              id:5,
              titulo:'Spiderman 2',
              poster:'https://hollywoodposters.com/wp-content/uploads/2023/04/SpiderManSacAdvOS.jpg'
            }
          ],
          proximosEstrenos:[
            {
              id:3,
              titulo:'Asteroid City',
              poster:'https://media1.orlandoweekly.com/orlando/imager/u/zoom/34403527/asteroid-city.jpg?cb=1686647127'
            },
            {
              id:4,
              titulo:'Asteroid City',
              poster:'https://media1.orlandoweekly.com/orlando/imager/u/zoom/34403527/asteroid-city.jpg?cb=1686647127'
            }
          ]
        })
        },500)
        return ()=>clearTimeout(timerId);
      })
    return (
        <section className='w-full flex flex-col border max-h-screen overflow-scroll'>
        <h2 className='text-2xl my-4'>Peliculas en cartelera</h2>
        <ListadoPeliculas peliculas={peliculas.enCartelera}/>
       <h2 className='text-2xl my-4'>Próximos Estrenos</h2>
       <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
        </section>
    );
    }
    export default IndexPeliculas
