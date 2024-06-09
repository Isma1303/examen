
import * as MantenimientoDeProductos from "./interfaces/mantenimiento_interface/MantenimientoDeProductos";
import { crearUsuario,actualizarUsuario,eliminarUsuario } from "./interfaces/mantenimiento_interface/MantenimientoUsuarios";
import { cancelarCita, obtenerCitasDoctor, obtenerCitasPaciente, obtenerCitasPorFecha, programarCita } from "./interfaces/mantenimiento_interface/MantenimientoCitas";
import { MantenimientoFactura } from "./interfaces/mantenimiento_interface/MantenimientoFactura";
// import { cargarRecetas } from "./interfaces/mantenimiento_interface/MantenimientoRecetas";
import { actualizarProductoS } from "./interfaces/mantenimiento_interface/MantenimientoDeProductos";
import { Receta } from "./interfaces/receta.interface";
import { MantenimientoPacientes } from "./interfaces/mantenimiento_interface/MantenimientoPacientes";
import { ActualizarCita } from "./interfaces/cita.interface";
import { obtenerCitas } from "./interfaces/mantenimiento_interface/MantenimientoCitasDC";
import {  DoctoR } from "./interfaces/mantenimiento_interface/MantenimientoDisponibilidadDeDoctor";
import { obtenerEdadPaciente } from "./interfaces/mantenimiento_interface/MantenimientoDeProductos";
const paciente = new MantenimientoPacientes();



/*edad del paciente, 
*conteo de pacientes,
*ultumas 5 recetas, 
*citas de un doctor, 
*citas de un paciente obtener 
*doctores dispono¡bles para una fecha, 
obtener medicamentos de una receta, 
*obtener el total de facturacion por mes*/

/*---------------Ultimas 5 recetas ---------------------*/


// function obtenerUltimasCincoRecetas(id:number){
//     const ultimasRecetas: Receta[] = MantenimientoPacientes.obtenerRecetasDePacientes(id);
//     console.log('Las últimas 5 recetas del paciente son:');
//     ultimasRecetas.forEach(receta => {
//         console.log(`ID: ${receta.recetaId}, Paciente: ${receta.pacienteId}, Doctor: ${receta.doctorId}`);
//         console.log('Medicamentos:');
//         receta.medicamentos.forEach(medicamento => {
//             console.log(`- ${medicamento.nombre}, Dosis: ${medicamento.dosis}, Frecuencia: cada ${medicamento.frecuencia_horas} horas, Duración: ${medicamento.duracion_dias} días`);
//         });
//         console.log('-------------------------');
//     });
// }

/*-----------------Citas De un Doctor--------------------*/

// console.log(obtenerCitas.obtenerCitasDeDoctor(1));

/*------------------Conteo De Pacientes------------------*/
// console.log("Total de pacientes: ", MantenimientoPacientes.obtenerTodosLosPacientes());



/*-------------------doctores disponibles-------------------*/
// function validarFechaDisponibleDeDoctor(id: number, fecha: Date){
//     const doctor = DoctoR.obtenerDoctorId(id);
//     console.log("-----------------------------------------")
//     console.log('Doctor: ',doctor ? doctor.nombre: 'Anonimo');
//     console.log('Fecha sollicitada: '+  fecha);
//     const disponibilidad = doctor.validarDisponibilidadDoctorParaFecha(id, fecha);
//     console.log(disponibilidad ? 'Fecha dispobile': 'Fecha no disponible' ),
//     console.log('----------------------------------------');
// }

/*------------- Edad Del Paciente ---------------*/

console.log(paciente.obtenerEdadDelPaciente(1))

/*----------------- total de facturacion por mes ------------------- */

// function facturacionMes(mes:number, anio: number){
//     const totalFacturacion = MantenimientoFactura.obtenerTotalFacturacionPorMes(mes, anio);
//     console.log(`Total de facturación para ${mes}/${anio}:`, totalFacturacion);
// }
