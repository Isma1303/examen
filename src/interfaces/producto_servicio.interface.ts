export interface ProductoServicio {
    id: number
    tipo: 'producto' | 'servicio';
    nombre: string
    precio: number
    stock : boolean
}
export interface CrearServicio {
    id?: number
    tipo: 'producto' | 'servicio';
    nombre: string
    precio: number
    stock : boolean
}

export interface ActualizarServicio{
    id?: number
    tipo?: 'producto' | 'servicio';
    nombre?: string
    precio?: number
    stock?: boolean
}