// import * as fs from 'fs';
// import { Receta } from '../receta.interface';
// const direccionDeArchivo = 'data/recetas.json'
// export class cargarRecetas {
//     recetas: Receta[] = [];

//     constructor() {
//         this.cargarRecetas();
//     }
//     private cargarRecetas(): void {
//         try {
//             const data = fs.readFileSync('./data/recetas.json', 'utf-8');
//             this.recetas = JSON.parse(data);
//         } catch (error) {
//             console.error('Error al cargar las recetas:', error);
//         }
//     }

// obtenerMedicamentosDeReceta(recetaId: number): string[] {
//     const receta = this.recetas.find(receta => receta.id === recetaId);
//     return receta ? receta.medicamentos.map(medicamento => medicamento.nombre) : [];
// }
// }
