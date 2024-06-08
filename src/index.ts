
import { eliminarServicio } from "./interfaces/mantenimiento_interface/MantenimientoDeProductos";
import { ActualizarServicio,ProductoServicio,CrearServicio } from "./interfaces/producto_servicio.interface";
import { Receta, CrearReceta,ActualizarReceta } from "./interfaces/receta.interface";
import { Factura, CrearFactura,ActualizarFactura } from "./interfaces/factura.interface";
import { estadoDeUsuario,crearUsuario,actualizarUsuario,eliminarUsuario } from "./interfaces/mantenimiento_interface/MantenimientoUsuarios";
// import { obtenerEdadPaciente, crearUsario, } from "./interfaces/mantenimiento_interface/MantenimientoPacientes";
import { cancelarCita, obtenerCitasDoctor, obtenerCitasPaciente, obtenerCitasPorFecha, programarCita, reprogramarCita } from "./interfaces/mantenimiento_interface/MantenimientoCitas";


// crearUsuario({nombre:'Rene', carnet: 12245, clave:'rene123', habilitado: false})
// eliminarUsuario(3)
// actualizarUsuario(2,{nombre: 'Isma'})
// obtenerEdadPaciente(1)


// CrearServicio({id: 3, tipo:'servicio', nombre: 'Limpueza bucal', precio:100,stock:true})
// ActualizarServicio(3,{stock:false})
// eliminarServicio(3)
// buscarproducto(1)

// CrearReceta({recetaId : 4, doctorId : 1, pacienteId:2,fecha:'10-12-2024',medicamentos:""})
// eliminarReceta(1)

// CrearFactura({facturaId:4, clienteId:1,fecha:"10-10-2024",serviciosConsumidos:"", total:120})
// eliminarfactura(1)
// obtenerFacturasPorCliente(2)
// ActualizarFactura({fecha:"12-01-2025"})


// cancelarCita(1)
// programarCita({pacienteId:4,doctorId:1,fecha:"12-12-2024",hora:"100:10",escripcion:"El paciente necesita hacer limpieza general",estado :'programada'})
// obtenerCitasDoctor(2)
// obtenerCitasPaciente(3)
// obtenerCitasPorFecha("12-12-2024")
