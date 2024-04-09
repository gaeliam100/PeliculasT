import TextInput from "../TextInput";
import { useState } from "react";

const SelectorImagen = ({name,label,imgU,onImageSelected,required}:SelectorImagenProps) => {
     const [imagenBase64,setImagenimagenBase64]=useState('');
    const [imagenUrl,setImagenUrl]=useState(imgU);
    const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.files) {
      const archivo = event.currentTarget.files[0];
      try {
        const result = aBase64(archivo);
        const representacionBase64 = await result;
        onImageSelected(representacionBase64); 
        setImagenimagenBase64(representacionBase64);
        setImagenUrl("");
      } catch (error) {
        console.error(error);
      }
    }
  };
  const aBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
    return (
        <div className="flex flex-col-reverse items-center">
            <TextInput 
                label={label}
                name={name}
                placeholder="https://www.imagen.com/imagen.jpg"
                type="file"
                required={required}
                onChange={handleImageChange}
                accept="image/*"
            />
            {imagenBase64 && 
            <div className="max-w-xs">
              <img  src={imagenBase64} alt="imagen" className="w-full max-w-md aspect-square object-cover my-6 rounded-lg shadow-md " />
            </div>
            }
            {imagenUrl && 
            <img src={imagenUrl} alt="imagen" className="w-full max-w-md aspect-square object-cover my-6 rounded-lg shadow-md " />
            }
        </div>
    );
}
interface SelectorImagenProps{
name:string;
label:string;
imagen?:string;
imgU?:string;
required?:boolean;
onImageSelected: (imagenBase64: string) => void;

}
export default SelectorImagen;