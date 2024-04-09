import { redirect } from 'react-router-dom';
import *  as yup from 'yup' 
interface FileProps{
    id:number;
    genero:string;
}
const values:FileProps[]=[];
export  const  loaderDataGender= async ()=>{
    return values;
}

const schema = yup.object().shape({
    genero: yup.string()
    .required('El género es requerido')
    .min(5,'El género debe tener al menos 5 caracteres')
    .max(30,'El género debe tener menos de 30 caracteres')
});

export const  createGender= async ({request}: {request: Request})=>{
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    try{
        await schema.validate(updates,{abortEarly:false});
        values.push({
          id: values.length+1,
          genero: updates.genero.toString()
        });
        console.log(values);
        return redirect('/generos/create');
    }catch(err){
        const yupError = err as yup.ValidationError;
        const errors:{[key:string]:string} = yupError.inner.reduce((acc, curr) => {
            if (curr.path) {
              return { ...acc, [curr.path]: curr.message };
            } else {
              return acc;
            }
          }, {});
          return {error:errors.genero} ;
    }
}
export const editGender= async ({request}: {request: Request})=>{
const formData = await request.formData();
const updates = Object.fromEntries(formData);
console.log(updates);
return redirect('/generos/edit/');
}