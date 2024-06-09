
import * as MantenimientoDeProductos from "./interfaces/mantenimiento_interface/MantenimientoDeProductos";
import { crearUsuario,actualizarUsuario,eliminarUsuario } from "./interfaces/mantenimiento_interface/MantenimientoUsuarios";
import { cancelarCita, obtenerCitasDoctor, obtenerCitasPaciente, obtenerCitasPorFecha, programarCita } from "./interfaces/mantenimiento_interface/MantenimientoCitas";
import { CrearFactura, eliminarfactura, obtenerFacturasPorCliente, ActualizarFactura } from "./interfaces/mantenimiento_interface/MantenimientoFactura";
import { CrearReceta, eliminarReceta } from "./interfaces/mantenimiento_interface/MantenimientoRecetas";
import { actualizarProductoS } from "./interfaces/mantenimiento_interface/MantenimientoDeProductos";
import { Receta } from "./interfaces/receta.interface";
import { MantenimientoPacientes } from "./interfaces/mantenimiento_interface/MantenimientoPacientes";
import { ActualizarCita } from "./interfaces/cita.interface";
import { obtenerCitas } from "./interfaces/mantenimiento_interface/MantenimientoCitasDC";
import {  DoctoR } from "./interfaces/mantenimiento_interface/MantenimientoDisponibilidadDeDoctor";
import { obtenerEdadPaciente } from "./interfaces/mantenimiento_interface/MantenimientoDeProductos";
// crearUsuario({nombre:'Rene', carnet: 12245, clave:'rene123', habilitado: false})
// eliminarUsuario(3)
// actualizarUsuario(2,{nombre: 'Isma'})
// obtenerEdadPaciente(1)


// MantenimientoDeProductos.CrearServicio({id: 3, tipo:'servicio', nombre: 'Limpueza bucal', precio:100,stock:true})
// MantenimientoDeProductos.actualizarProductoS(1,{stock:false})
// MantenimientoDeProductos.eliminarServicio(1)
// MantenimientoDeProductos.buscarproducto(2)

// CrearReceta({recetaId : 4, doctorId : 1, pacienteId:2,fecha:new Date('10-12-2024'),medicamentos:[]})
// eliminarReceta(1)

// CrearFactura({facturaId:4, clienteId:1,fecha: new Date("10-10-2024"),serviciosConsumidos:[], total:120})
// eliminarfactura(1)
// obtenerFacturasPorCliente(2)
// ActualizarFactura(2,{clienteId: 3} )


// cancelarCita(1)
// programarCita(4, 1,"12-12-2024","El paciente necesita hacer limpieza general")
// obtenerCitasDoctor(2)
// obtenerCitasPaciente(2)
// obtenerCitasPorFecha("12-12-2024")


/*edad del paciente, 
*conteo de pacientes,
*ultumas 5 recetas, 
*citas de un doctor, 
*citas de un paciente obtener doctores dispono¡bles para una fecha, 
obtener medicamentos de una receta, 
obtener el total de facturacion por mes*/

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
console.log(MantenimientoPacientes.obtenerEdadDelPaciente(2))
