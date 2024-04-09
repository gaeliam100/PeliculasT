import Button from "./Button";

const Selector=({seleccionados,noSeleccionados,onChange}:SelectorProps)=>{

    const seleccionar=(item:selectorModel)=>{
        const selec=[...seleccionados,item];
        const noSelec=noSeleccionados.filter(x=>x.id!==item.id);
        onChange(selec,noSelec);
    }
    const deseleccionar=(item:selectorModel)=>{
        const selec=seleccionados.filter(x=>x.id!==item.id);
        const noSelec=[...noSeleccionados,item];
        onChange(selec,noSelec);
    }
    const SeleccionarTodo=()=>{
        const selec=[...seleccionados,...noSeleccionados];
        const noSelec:selectorModel[]=[];
        console.log(selec);
        onChange(selec,noSelec);
    }
    const deseleccionarTodo=()=>{
        const selec:selectorModel[]=[];
        const noSelec=[...seleccionados,...noSeleccionados];
        onChange(selec,noSelec);
    }
    return(
        <div className="my-48 flex flex-col h-72  justify-around w-full md:flex-row md:justify-between">
            <section id="no-selected">
            <ul className="bg-gray-700/10 rounded-lg shadow-md h-full min-h-[400px] overflow-scroll w-72 p-6" draggable>
                {
                    noSeleccionados.map((item)=>(
                        <li 
                        key={item.id} 
                        className=" select-none rounded-sm h-10 my-8 bg-white text-gray-900  w-full  shadow-lg cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-150"
                        onClick={()=>seleccionar(item)}
                        >
                            {item.nombre}
                        </li>
                    ))
                }

            </ul>
            </section>
            <section className="flex flex-col justify-around items-center">
                <Button text=">>>" type="button" onClick={SeleccionarTodo} />
                <Button text="<<<" type="button" onClick={deseleccionarTodo} />
            </section>
            <section id="selected">
                <ul className="bg-gray-700/10 overflow-scroll rounded-lg shadow-md h-72 min-h-[400px] w-72 p-6">
                {
                    seleccionados.map((item)=>(
                        <li 
                        key={item.id} 
                        className=" select-none rounded-sm my-8 h-10 bg-white text-gray-900  w-full  shadow-lg cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-150"
                        onClick={()=>deseleccionar(item)}
                        >
                           
                         {item.nombre}
                        </li>
                    ))
                }
                </ul>
            </section>
        </div>
    )
}
interface SelectorProps{
    seleccionados:selectorModel[];
    noSeleccionados:selectorModel[];
    onChange:(seleccionados:selectorModel[],noSeleccionados:selectorModel[])=>void;
    }
  export  interface selectorModel{
        id:number;
        nombre:string;
    }
export default Selector;