
import * as MantenimientoDeProductos from "./interfaces/mantenimiento_interface/MantenimientoDeProductos";
import { crearUsuario,actualizarUsuario,eliminarUsuario } from "./interfaces/mantenimiento_interface/MantenimientoUsuarios";
import { cancelarCita, obtenerCitasDoctor, obtenerCitasPaciente, obtenerCitasPorFecha, programarCita } from "./interfaces/mantenimiento_interface/MantenimientoCitas";
import { obtenerEdadPaciente } from "./interfaces/mantenimiento_interface/MantenimientoPacientes";
import { CrearFactura, eliminarfactura, obtenerFacturasPorCliente, ActualizarFactura } from "./interfaces/mantenimiento_interface/MantenimientoFactura";
import { CrearReceta, eliminarReceta } from "./interfaces/mantenimiento_interface/MantenimientoRecetas";
import { actualizarProductoS } from "./interfaces/mantenimiento_interface/MantenimientoDeProductos";
import { ActualizarCita } from "./interfaces/cita.interface";
crearUsuario({nombre:'Rene', carnet: 12245, clave:'rene123', habilitado: false})
eliminarUsuario(3)
actualizarUsuario(2,{nombre: 'Isma'})
obtenerEdadPaciente(1)


MantenimientoDeProductos.CrearServicio({id: 3, tipo:'servicio', nombre: 'Limpueza bucal', precio:100,stock:true})
MantenimientoDeProductos.actualizarProductoS(1,{stock:false})
MantenimientoDeProductos.eliminarServicio(1)
MantenimientoDeProductos.buscarproducto(1)

CrearReceta({recetaId : 4, doctorId : 1, pacienteId:2,fecha:new Date('10-12-2024'),medicamentos:[]})
eliminarReceta(1)

CrearFactura({facturaId:4, clienteId:1,fecha: new Date("10-10-2024"),serviciosConsumidos:[], total:120})
eliminarfactura(1)
obtenerFacturasPorCliente(2)
ActualizarFactura(2,{clienteId: 3} )


cancelarCita(1)
programarCita(4, 1,"12-12-2024","El paciente necesita hacer limpieza general")
obtenerCitasDoctor(2)
obtenerCitasPaciente(1)
obtenerCitasPorFecha("12-12-2024")
