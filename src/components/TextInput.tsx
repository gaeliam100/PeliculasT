import React from 'react';
const TextInput:React.FC<TextInputProps> = ({ value,label,placeholder,type, onChange ,name,accept,required}) => {
    return (
        <div className="grid w-full  items-center gap-1.5">
          <label className="text-sm text-left text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
          <input
          name={name}
          required={required}
          onChange={onChange}
            placeholder={placeholder}
            type={type}
            className="block h-10 
            w-full rounded-md border bg-white
            border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={value}
            accept={accept}
         />
        </div>
    );
    };
    interface TextInputProps {
        value?: string | undefined;
        label:string;
        name:string;
        required?:boolean;
        placeholder?:string;
        type:string;
        accept?:string;
        onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
export default TextInput;