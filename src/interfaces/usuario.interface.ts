export interface Usuario {
    id_usuario: number
    nombre: string
    carnet: number
    clave: string
    habilitado : boolean

}
export interface  CrearUsuario {
    id_usuario?: number
    nombre: string
    carnet: number
    clave: string
    habilitado : boolean
}
export interface actualizarUsuario{
    id_usuario?: number
    nombre?: string
    carnet?: number
    clave?: string
    habilitado ?: boolean
}