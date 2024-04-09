// routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import IndexCinema from './../components/cines/IndexCinema';
import IndexPeliculas from '../components/peliculas/IndexPeliculas';
import IndexGeneros from '../components/generos/IndexGeneros';
import IndexActores from '../components/actores/IndexActores';
import ErrorPage from '../components/ErrorPage';
import CreateCinema from '../components/cines/CreateCinema';
import CreateGenero from '../components/generos/CreateGenero';
import {createGender, editGender} from '../services/gender'
// import { values } from '../services/gender';
import {loaderDataGender} from '../services/gender'
import EditGender from '../components/generos/EditGender';
import FilterMovie from '../components/peliculas/FilterMovie';
import { filterMovie } from '../services/filterM';
import EditarActor from '../components/actores/EditarActor';
import CinemaEdit from '../components/cines/CinemaEdit';
import CreateActor from '../components/actores/CreateActor';
import PeliculasIndex from '../components/peliculas/PeliculasIndex';
import PeliculaEditar from '../components/peliculas/PeliculaEditar';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App contiene el Navbar y el Outlet
    children: [
      { 
        index: true, 
        element: <IndexPeliculas />
      },
      { 
        path: "/cines", 
        element: <IndexCinema />, 
        children:[
          {
            path:'/cines/create',
            element:<CreateCinema/>,
          },
          {
            path:'/cines/edit/',
            element:<CinemaEdit/>,
          }
        ]
      },
      {
        path: "/actores",
        element: <IndexActores />,
        children:[
          {
            index:true,
            path:'/actores/create',
            element:<CreateActor/>,
          },
          {
            path:'/actores/edit/',
            element:<EditarActor />,
          }
        ]
      },
      {
        path:'/actores/edit/',
        element:<EditarActor />,
      },
      {
            path: "/generos",
            element: <IndexGeneros />,
            children:[
              {
              index:true,
              path:'/generos/create',
              loader:loaderDataGender,
              element:<CreateGenero />,
              action:createGender,
            },
            {
              path:'/generos/:gender',
              element:<EditGender />,
              action:editGender,
            },
          ]
      },
      {
        path: "/peliculas",
        element: <FilterMovie />,
         action:filterMovie,
      },
      {
        index:true,
        path: "/peliculas/create",
        element: <PeliculasIndex />,
      },
      {
        path: "/peliculas/edit/",
        element: <PeliculaEditar />,
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
