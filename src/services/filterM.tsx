import { redirect } from 'react-router-dom';
import *  as yup from 'yup' 
const schema = yup.object().shape({
    nombre: yup.string()
    .required('El nombre es requerido')
    .min(5,'El nombre debe tener al menos 5 caracteres')
    .max(30,'El nombre debe tener menos de 30 caracteres'),
    idGenero: yup.number()
    .required('El género es requerido')
    .positive('El género debe ser un número positivo')
    .integer('El género debe ser un número entero'),
    enCines: yup.boolean(),
    proximosEstrenos: yup.boolean()
});
export const filterMovie= async ({request}: {request: Request})=>{
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log(updates);
    try{
        await schema.validate(updates,{abortEarly:false});
        console.log(updates);
        return redirect('/peliculas');
    }
    catch(err){
        const yupError = err as yup.ValidationError;
        const errors:{[key:string]:string} = yupError.inner.reduce((acc, curr) => {
            if (curr.path) {
              return { ...acc, [curr.path]: curr.message };
            } else {
              return acc;
            }
          }, {});
          return {error:errors.nombre} ;
    }
}