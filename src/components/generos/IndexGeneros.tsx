import { Outlet } from "react-router-dom";

const IndexGeneros = () => {
    return (
        <div className="flex flex-col items-center w-full">
        <h1 className="text-2xl my-4">Generos</h1>
        <div className="max-w-xl w-full my-4">
            <Outlet />
        </div>
       </div>
    );
    }
    export default IndexGeneros