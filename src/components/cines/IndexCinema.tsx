// import CreateCinema from "./CreateCinema";
import { Outlet } from "react-router-dom";
const IndexCinema = () => {
    return (
        <div className="flex flex-col items-center w-full">
        <Outlet />
       </div>
    );
    }
    export default IndexCinema