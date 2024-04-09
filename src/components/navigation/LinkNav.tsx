
import  {useState} from 'react';
import { ChevronIcon } from '../Icons/Icons';
import { NavigationModel } from './navigation.model';
import { NavLink } from 'react-router-dom';
interface Props{
    link: NavigationModel;
}
const LinkNav = ({link}:Props) => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <a
          href="#"
          className="text-gray-800 rounded-lg hover:bg-gray-100  px-2 flex justify-between py-2 w-full cursor-pointer active:bg-gray-200"
          onClick={() => setOpen(!open)}
        >
        <span className="inline-flex gap-x-4">
        {link.icon}
        {link.texto}
        </span>
          <ChevronIcon 
          isOpen={!open}
          />
        </a>
        <div className={`w-full flex h-0 flex-col my-2 transition-all ease-in duration-200 ${open?'flex scale-y-100 h-auto':'scale-y-0'} `} >
            {
                link.items.map((item, index) => {
                return (
                    <NavLink
                    to={item.url}
                    key={index}
                    
                    className=
                    
                    { `transition-all ease-out duration-100 ${open?'opacity-1':'opacity-0'} text-gray-800 hover:bg-gray-100 rounded-lg active:bg-gray-200 px-2 flex justify-between py-2 w-full cursor-pointer`}
                    >
                    {item.texto}
                    </NavLink>
                );
            })}
        </div>
        </>
    );
};

export default LinkNav;