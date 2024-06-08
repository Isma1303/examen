import { readFileSync, writeFileSync } from 'fs' 
import { Paciente, ActualizarPaciente,CrearPaciente } from '../paciente.interface'
import { Receta } from '../receta.interface';
const direccionDeArchivo = 'data/pacientes.json'
const Pacientes : Paciente[]=[];
const facturas: Paciente[] = [];

 const lecturadePaciente = ():Paciente []=>{
    const archivo: string=readFileSync(direccionDeArchivo,'utf8')
    if (archivo.trim()=== '' )return[]
    return JSON.parse(archivo) as Paciente[]
}
const crearPaciente =(crearPaciente : Paciente) =>{
    const productosactuales = lecturadePaciente()
    crearPaciente.pacienteId = 3
    productosactuales.push(crearPaciente as Paciente)
    writeFileSync(direccionDeArchivo, JSON.stringify(productosactuales))
}
const eliminarPaciente= (pacienteId: number)=>{
    const pacientesActuales = lecturadePaciente()
    const pacientesFinales = pacientesActuales.filter((Paciente)=>Paciente.pacienteId!== pacienteId)
    writeFileSync(direccionDeArchivo, JSON.stringify(pacientesFinales))
}
const buscarPaciente=(pacienteId: number): Paciente | undefined => {
    const paciente = Pacientes.find(p => p.pacienteId === pacienteId);
    if (paciente) {
        console.log(`Paciente encontrado: ${paciente.nombre}`);
        return paciente;
    } else {
        console.log('Paciente no encontrado.');
        return undefined;
    }
}
function obtenerEdadPaciente(pacienteId: number): number | undefined {
    const paciente = Pacientes.find(p => p.pacienteId === pacienteId);
    if (!paciente) {
        console.log('Paciente no encontrado.');
        return undefined;
    }
}
function obtenerTodosPacientes(): Paciente[] {
    console.log(`Total de pacientes: ${Pacientes.length}`);
    return Pacientes;
}
function obtenerUltimasRecetas(pacienteId: number): Receta[] {
    const paciente = Pacientes.find(p => p.pacienteId === pacienteId);
    if (!paciente) {
        console.log('Paciente no encontrado.');
        return [];
    }
    const ultimasRecetas = paciente.recetas.slice(-5);
    console.log(`Últimas 5 recetas del paciente ${paciente.nombre}:`, ultimasRecetas);
    return ultimasRecetas;
}
function contarPacientes(): number {
    const total = Pacientes.length;
    console.log(`Conteo total de pacientes: ${total}`);
    return total;
}
