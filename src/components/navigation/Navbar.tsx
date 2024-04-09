import {  NavLink } from "react-router-dom";
import { CinemaIcon } from "../Icons/CinemaIcon";
import {
  HomeIcon,
  GenderIcon,
  MovieIcon,
  FilterIcon,
  PeopleIcon,
  LocationIcon,
} from "../Icons/Icons";
import LinkNav from "./LinkNav";
const navLinks = [
  {
    icon: <HomeIcon />,
    texto: "Inicio",
    url: "/",
    items: [],
  },
  {
    icon: <GenderIcon />,
    texto: "Generos",
    url: "/generos",
    items: [
      {
        icon: "",
        texto: "Crear Genero",
        url: "/generos/create",
      },
      {
        icon: "",
        texto: "Editar Genero",
        url: "/generos/edit",
      },
    ],
  },
  {
    icon: <PeopleIcon />,
    texto: "Actores",
    url: "/actores",
    items: [{
        icon: "",
        texto: "Crear Actor",
        url: "/actores/create",
        },{
        icon: "",
        texto: "Editar Actor",
        url: "/actores/edit",
    }],
  },
  {
    icon: <LocationIcon />,
    texto: "Cines",
    url: "/cines",
    items: [{
        icon: "",
        texto: "Crear Cine",
        url: "/cines/create",
        },{
        icon: "",
        texto: "Editar Cine",
        url: "/cines/edit",
    }],
  },
  {
    icon: <FilterIcon />,
    texto: "Filtrar Peliculas",
    url: "/peliculas",
    items: [
        {
            icon: "",
            texto: "Filtrar Peliculas",
            url: "/peliculas/filter",
        },
        {
            icon: "",
            texto: "Crear Pelicula",
            url: "/peliculas/create",
        }
    ],
  },
  {
    icon: <MovieIcon />,
    texto: "Crear Pelicula",
    url: "/peliculas/create",
    items: [{
        icon: "",
        texto: "Crear Pelicula",
        url: "/peliculas/create",
    },
    {
        icon: "",
        texto: "Editar Pelicula",
        url: "/peliculas/edit",
    }
],
  },
];
export const Navbar = () => {
  return (
    <nav className="flex flex-col max-h-screen overflow-y-scroll h-full min-h-screen justify-between items-start p-4 border bg-transparent w-full max-w-[300px] bg-gray-500">
      <header className="flex justify-around flex-col gap-4 items-center w-full">
        <CinemaIcon />
        <h2 className="text-3xl font-semibold">Cine app</h2>
      </header>
      <ul className="flex flex-col justify-items-end w-full h-full">
        {navLinks.map((link, index) => {
          return (
            <li key={index} className="flex flex-col items-center pb-4 justify-around w-full transition-all duration-500 ease-in-out">
              {!(link.items.length > 0) ? (
                <NavLink
                  to={link.url}
                  //Active link
                  
                  className="text-gray-800 hover:bg-gray-100 rounded-lg active:bg-gray-200 px-2 flex justify-between py-2 w-full cursor-pointer"
                >
                  <span className="inline-flex gap-x-4">
                  {link.icon}
                    {link.texto}
                  </span>
                </NavLink>
              ) : (
                <LinkNav link={link} />
              )}
            </li>
          );
        })}
      </ul>
      <footer>creado por gaeliam</footer>
    </nav>
  );
};

/*
 */
