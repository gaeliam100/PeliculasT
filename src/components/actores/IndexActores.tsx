import { Outlet } from "react-router-dom";

const IndexActores = () => {
    return (
        <div className="flex flex-col items-center w-full">
        <h1 className="text-2xl my-4">formularios de actores</h1>
        <div className="w-full min-h-screen overflow-scroll">
            <Outlet />
       </div>
         </div>
    );
    }
    export default IndexActores