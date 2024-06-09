import * as fs from 'fs';
import { Cita } from '../cita.interface';

export class obtenerCitas {
    static obtenerCitasDeDoctor(arg0: number): any {
        throw new Error("Method not implemented.");
    }
  private citas: Cita[] = [];

  constructor() {
    this.verCitas();
  }

  private verCitas(): void {
    try {
      const data = fs.readFileSync('./data/citas.json', 'utf-8');
      this.citas = JSON.parse(data);
    } catch (error) {
      console.error('Error al cargar las citas:', error);
    }
  }

  private almacenarCitas(): void {
    fs.writeFileSync('./data/citas.json', JSON.stringify(this.citas, null, 2));
  }
  private obtenerUltimoIdCita(): number {
    if (this.citas.length === 0) {
        return 1; 
    }
    const ultimoidCita = this.citas[this.citas.length - 1];
    return ultimoidCita.citaId + 1;
  }

    programarCita(cita: Cita): void {
      const id = this.obtenerUltimoIdCita();
      cita.citaId = id;
      this.citas.push(cita);
      this.almacenarCitas();
    }

  

    private obtenerCitaPorId(idCita: number): Cita | undefined {
        return this.citas.find(cita => cita.citaId === idCita);
    }

  cancelarCita(idCita: number): boolean {
        const index = this.citas.findIndex(cita => cita.citaId === idCita);
        if (index === -1) {
            return false; 
        }
        this.citas.splice(index, 1);
        this.almacenarCitas();
        return true; 
    }

  reProgramarCita(idCita: number, nuevaFechaHora: Date): boolean {
    const cita = this.citas.find(cita => cita.citaId === idCita);
    if (cita) {
      cita.fecha = nuevaFechaHora;
      this.almacenarCitas();
      return true;
    } else {
      console.log(`No se encontró la cita con ID ${idCita}`);
      return false;
    }
  }

  obtenerCitasDeDoctor(idDoctor: number): Cita[] {
    return this.citas.filter(cita => cita.doctorId === idDoctor);
  }

  obtenerCitasDePaciente(idPaciente: number): Cita[] {
    return this.citas.filter(cita => cita.pacienteId === idPaciente);
  }
  obtenerCitasPorDoctorYFecha(idDoctor: number, fecha: Date): Cita[] {
    return this.citas.filter(cita => {
      const citaFecha = new Date(cita.fecha);
      return cita.doctorId === idDoctor &&
             citaFecha.getFullYear() === fecha.getFullYear() &&
             citaFecha.getMonth() === fecha.getMonth() &&
             citaFecha.getDate() === fecha.getDate();
    });
  }
  

  obtenerCitasPorFecha(fecha: Date): Cita[] {
    const citasFecha = this.citas.filter(cita => {
      const citaDate = new Date(cita.fecha);
      return citaDate.toDateString() === fecha.toDateString();
    });
    return citasFecha;
  }
  
  esMismaFecha(fecha1: Date, fecha2: Date): boolean {
    return fecha1.getFullYear() === fecha2.getFullYear() &&
           fecha1.getMonth() === fecha2.getMonth() &&
           fecha1.getDate() === fecha2.getDate();
  }
}
