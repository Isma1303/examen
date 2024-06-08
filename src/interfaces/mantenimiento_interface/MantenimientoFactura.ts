import { readFileSync, writeFileSync } from 'fs'
import { Factura, CrearFactura, ActualizarFactura  } from '../factura.interface'
import { crearUsuario } from './MantenimientoUsuarios'
const direccionDeArchivo = 'data/facturas.json'
import { ItemFactura } from '../itemfactura.interface'

const facturas: Factura[] = [];
 const lecturaDeFactura = ():Factura []=>{
    const archivo: string=readFileSync(direccionDeArchivo,'utf8')
    if (archivo.trim()=== '' )return[]
    return JSON.parse(archivo) as Factura[]
}


const CrearFactura =(CrearFactura : Factura) =>{
    const productosactuales = lecturaDeFactura()
    CrearFactura.facturaId = 1
    productosactuales.push(CrearFactura as Factura)
    writeFileSync(direccionDeArchivo, JSON.stringify(productosactuales))
}
const eliminarfactura= (facturaId: number)=>{
    const FacturaActual = lecturaDeFactura()
    const facturaFinal = FacturaActual.filter((Factura)=>Factura.facturaId!== facturaId)
    writeFileSync(direccionDeArchivo, JSON.stringify(facturaFinal))
}
const ActualizarFactura = (facturaId:number, actualizarfactura:ActualizarFactura )=>{
    const actualfactura = lecturaDeFactura()
    const facturaactualizada = actualfactura.filter((Factura)=> Factura.facturaId == facturaId)[0]
    if (facturaactualizada.facturaId) facturaactualizada.facturaId= facturaactualizada.facturaId
    if (facturaactualizada.clienteId) facturaactualizada.clienteId= facturaactualizada.clienteId
    if (facturaactualizada.fecha) facturaactualizada.fecha= facturaactualizada.fecha
    if (facturaactualizada.serviciosConsumidos) facturaactualizada.serviciosConsumidos= facturaactualizada.serviciosConsumidos
    if (facturaactualizada.total) facturaactualizada.total= facturaactualizada.total
    eliminarfactura(facturaId)
    const facturaFinal = lecturaDeFactura()
    facturaFinal.push(facturaactualizada)
    writeFileSync(direccionDeArchivo, JSON.stringify(facturaFinal))
    
}
function obtenerFacturasPorCliente(clienteId: number): Factura[] {
    const facturasCliente = facturas.filter
    (f => f.clienteId === clienteId);
    console.log(`Facturas del cliente ID ${clienteId}:`, facturasCliente);
    return facturasCliente;
}

function obtenerProductosPorFactura(facturaId: number): ItemFactura[] {
    const factura = facturas.find(f => f.facturaId === facturaId);
    if (factura) {
        console.log(`Productos de la factura ID ${facturaId}:`, factura.serviciosConsumidos);
        return factura.serviciosConsumidos;
    } else {
        console.log('Factura no encontrada.');
        return [];
    }
}
