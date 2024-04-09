
const SelectInput = ({ options, ...props }:SelectInputProps) => {
    return (
        <select {...props} className="
        flex h-10 w-full rounded-md bg-white
        border border-input bg-background px-3 py-2 
        text-sm ring-offset-background 
        file:border-0 file:bg-transparent 
        file:text-sm file:font-medium 
        placeholder:text-muted-foreground 
        focus-visible:outline-none 
        focus-visible:ring-2 
        focus-visible:ring-ring 
        focus-visible:ring-offset-2 
        disabled:cursor-not-allowed 
        disabled:opacity-50">
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
            ))}
        </select>
    );
}

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: {
        text: string;
        value: string | number;
    }[];
}

export default SelectInput;