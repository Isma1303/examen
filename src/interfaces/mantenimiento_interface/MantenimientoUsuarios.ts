import { readFileSync, writeFileSync } from 'fs'
import { Usuario, CrearUsuario, actualizarUsuario } from '../usuario.interface'
import { json } from 'stream/consumers';
const direccionDeArchivo ='data/usuarios.json'

// let usuarioAutenticado: Usuario | null = null;


const lecturaDeUsuarios =(): Usuario []=>{
    const archivo: string = readFileSync(direccionDeArchivo,'utf8')
    if (archivo.trim()=== '' )return[]
    return JSON.parse(archivo) as Usuario[]
}

const crearUsuario =(crearUsuario : CrearUsuario) =>{
    const usuariosActuales = lecturaDeUsuarios()
    crearUsuario.id_usuario = 3 
    usuariosActuales.push(crearUsuario as Usuario)
    writeFileSync(direccionDeArchivo, JSON.stringify(usuariosActuales))
}

const estadoDeUsuario=(id_Usuario:number)=>{
    const estadoDeUsuarios = lecturaDeUsuarios()
    

}

const eliminarUsuario = (id_Usuario: number)=>{
    const usuariosActuales = lecturaDeUsuarios()
    const UsuarioFianl = usuariosActuales.filter((usuarios)=>usuarios.id_usuario!== id_Usuario)
    writeFileSync(direccionDeArchivo, JSON.stringify(UsuarioFianl))
}

const actualizarUsuario = (id_Usuario:number, actualizarUsuario: actualizarUsuario )=>{
        const usuariosActuales = lecturaDeUsuarios()
        const actualizarusuarioss = usuariosActuales.filter((usuarios)=> usuarios.id_usuario == id_Usuario)[0]
        if (actualizarUsuario.id_usuario) actualizarusuarioss.id_usuario= actualizarUsuario.id_usuario
        if (actualizarUsuario.nombre) actualizarusuarioss.nombre= actualizarUsuario.nombre
        if (actualizarUsuario.carnet) actualizarusuarioss.carnet= actualizarUsuario.carnet
        if (actualizarUsuario.nombre) actualizarusuarioss.nombre= actualizarUsuario.nombre
        if (actualizarUsuario.clave) actualizarusuarioss.clave= actualizarUsuario.clave
        if (actualizarUsuario.nombre) actualizarusuarioss.nombre= actualizarUsuario.nombre
        if (actualizarUsuario.habilitado) actualizarusuarioss.habilitado= actualizarUsuario.habilitado
        eliminarUsuario(id_Usuario)
        const UsuarioFianl = lecturaDeUsuarios()
        UsuarioFianl.push(actualizarusuarioss)
        writeFileSync(direccionDeArchivo, JSON.stringify(UsuarioFianl))
        
}
export {lecturaDeUsuarios, actualizarUsuario, eliminarUsuario, crearUsuario, estadoDeUsuario}