import { readFileSync, writeFileSync } from 'fs'
import { ActualizarServicio, CrearServicio, ProductoServicio } from '../producto_servicio.interface'
let direccionDeArchivo = 'data/productos_servicios.json'

const lecturaDeServicios =():ProductoServicio []=>{
    const archivo: string=readFileSync(direccionDeArchivo,'utf8')
    if (archivo.trim()=== '' )return[]
    return JSON.parse(archivo) as ProductoServicio[]
}
const CrearServicio =(crearproducto : CrearServicio) =>{
    const productosactuales = lecturaDeServicios()
    crearproducto.id = 1
    productosactuales.push(crearproducto as ProductoServicio)
    writeFileSync(direccionDeArchivo, JSON.stringify(productosactuales))
}
const eliminarServicio = (id: number)=>{
    const productosActuales = lecturaDeServicios()
    const productofinal = productosActuales.filter((ProductoServicio)=>ProductoServicio.id!== id)
    writeFileSync(direccionDeArchivo, JSON.stringify(productofinal))
}

const actualizarProductoS = (id:number, actualizarproducto: ActualizarServicio )=>{
    const priductosActuales = lecturaDeServicios()
    const actualizarservicios = priductosActuales.filter((ProductoServicio)=> ProductoServicio.id == id)[0]
    if (actualizarservicios.id) actualizarservicios.id= actualizarservicios.id
    if (actualizarservicios.tipo) actualizarservicios.tipo= actualizarservicios.tipo
    if (actualizarservicios.nombre) actualizarservicios.nombre= actualizarservicios.nombre
    if (actualizarservicios.precio) actualizarservicios.precio= actualizarservicios.precio
    if (actualizarservicios.stock) actualizarservicios.stock= actualizarservicios.stock
    eliminarServicio(id)
    const UsuarioFianl = lecturaDeServicios()
    UsuarioFianl.push(actualizarservicios)
    writeFileSync(direccionDeArchivo, JSON.stringify(UsuarioFianl))
    
}
const bucarproducto = (id:number)=>{
    const productosActivos = lecturaDeServicios()
    const producto = productosActivos.find(p =>p.id=== id)
    if (producto){
        console.log(`Producto encontrado: ${producto.nombre}`);
        return producto;
    } else {
        console.log('Producto no encontrado.');
        return undefined;
    }
}

export {lecturaDeServicios, ActualizarServicio, eliminarServicio, CrearServicio, bucarproducto, }