import ReactMarkdown from "react-markdown";

export const InputMarkDown = ({name,label,value,onChange}:InputMarkDownProps) => {
    return (
        <div className="flex flex-row-reverse w-full mx-2 my-8">
                        <section className="w-full">
            <label>{label} Preview:</label>
            <div className="max-h-[500px] w-full">
                <ReactMarkdown className={"text-left p-2"}>
                {value}
                </ReactMarkdown>
            </div>
            </section>
            <section className="w-full">
            <label>{label}</label>
            <div className="w-full">
            <textarea className="w-full bg-white/80 border resize-none"  name={name} id="biography" value={value} onChange={onChange} cols={30} rows={10}>
            </textarea>
            </div>
            </section>

        </div>
    )
}
interface InputMarkDownProps {
name:string;
label:string;
value?:string;
onChange:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
}
export default InputMarkDown;