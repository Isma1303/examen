import * as fs from 'fs';
import { Factura } from '../factura.interface';
import { ProductoServicio } from '../producto_servicio.interface';
import { ItemFactura } from '../itemfactura.interface';

export class MantenimientoFactura {
    static obtenerTotalFacturacionPorMes(mes: number, anio: number) {
        throw new Error("Method not implemented.");
    }
  private facturas: Factura[] = [];
  private productoServicioService: MantenimientoFactura;

  constructor(productoServicioService: MantenimientoFactura) {
    this.productoServicioService = productoServicioService;

}
obtenerTotalFacturacionPorMes(mes: number, anio: number): number {
  const facturasMes = this.facturas.filter(factura => {
      const fecha = new Date(factura.fecha);
      return fecha.getMonth() === mes && fecha.getFullYear() === anio;
  });
  return facturasMes.reduce((total, factura) => total + factura.total, 0);
}


}
