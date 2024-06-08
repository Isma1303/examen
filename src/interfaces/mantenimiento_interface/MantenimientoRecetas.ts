import { readFileSync, writeFileSync } from 'fs'
import { Receta, ActualizarReceta, CrearReceta } from '../receta.interface'

const direccionDeArchivo = 'data/recetas.json'

 const lectuaDeReceta = ():Receta []=>{
    const archivo: string=readFileSync(direccionDeArchivo,'utf8')
    if (archivo.trim()=== '' )return[]
    return JSON.parse(archivo) as Receta[]
}

const CrearReceta =(CrearReceta : Receta) =>{
    const productosactuales = lectuaDeReceta()
    CrearReceta.recetaId = 3
    productosactuales.push(CrearReceta as Receta)
    writeFileSync(direccionDeArchivo, JSON.stringify(productosactuales))
}
const eliminarReceta= (recetaId: number)=>{
    const RecetaActual = lectuaDeReceta()
    const recetaFinal = RecetaActual.filter((Receta)=>Receta.recetaId!== recetaId)
    writeFileSync(direccionDeArchivo, JSON.stringify(recetaFinal))
}
// const ActualizarReceta = (recetaId:number, actualizarreceta:ActualizarReceta )=>{
//     const ActualizarReceta = lectuaDeReceta()
//     const recetaconcambios = actualizarreceta.filter((Receta: { recetaId: number })=> Receta.recetaId == recetaId)[0]
//     if (recetaconcambios.recetaId) recetaconcambios.recetaId= recetaconcambios.recetaId
//     if (recetaconcambios.doctorId) recetaconcambios.doctorId= recetaconcambios.doctorId
//     if (recetaconcambios.pacienteId) recetaconcambios.pacienteId= recetaconcambios.pacienteId
//     if (recetaconcambios.fecha) recetaconcambios.fecha= recetaconcambios.fecha
//     if (recetaconcambios.medicamento) recetaconcambios.medicamento= recetaconcambios.medicamento
//     eliminarReceta(recetaId)
//     const recetaFinal = lectuaDeReceta()
//     recetaFinal.push(ActualizarReceta)
//     writeFileSync(direccionDeArchivo, JSON.stringify(recetaFinal))
// }
