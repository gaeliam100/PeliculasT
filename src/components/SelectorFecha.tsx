
const SelectorFecha = ({nombre,label}:SelectorFechaProps) => {
return (
    <div className="grid w-full  items-center gap-1.5">
    <label className="text-sm text-left text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {label}
    </label>
    <input
    name={nombre}
      type="date"
      className="flex h-10 bg-white w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
   />
  </div>
        )
}
interface SelectorFechaProps {
nombre:string;
label:string;
}
export default SelectorFecha;