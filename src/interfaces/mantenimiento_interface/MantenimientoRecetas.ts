import { readFileSync, writeFileSync } from 'fs'
import { Receta, ActualizarReceta, CrearReceta } from '../receta.interface'

const direccionDeArchivo = 'data/recetas.json'