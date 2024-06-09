import { ItemFactura } from "./itemfactura.interface";
export interface Factura {
    nombre: any;
    pacienteId: number;
    facturaId: number;
    clienteId: number; 
    fecha: Date; 
    serviciosConsumidos: ItemFactura[];
    total: number;
}
export interface CrearFactura{
    facturaId?: number;
    clienteId: number; 
    fecha: Date; 
    serviciosConsumidos: ItemFactura[];
    total: number;
}
export interface ActualizarFactura{
    facturaId?: number;
    clienteId?: number; 
    fecha?: Date; 
    serviciosConsumidos?: ItemFactura[];
    total?: number;
}
