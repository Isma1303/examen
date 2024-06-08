import { Medicamento } from './medicamento.interface'

export interface Receta {
    recetaId: number
    doctorId: number
    pacienteId:number
    fecha:Date
    medicamentos: Medicamento[]
}
export interface CrearReceta {
    recetaId?: number
    doctorId: number
    pacienteId:number
    fecha:Date
    medicamentos: Medicamento[]
}
export interface ActualizarReceta{
    recetaId?: number
    doctorId?: number
    pacienteId?:number
    fecha?:Date
    medicamentos?: Medicamento[]
}