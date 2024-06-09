import * as fs from 'fs';
import { Doctor } from '../doctor.interface';
import { Horario } from '../horario.interface';
import { Cita } from '../cita.interface';
import { obtenerCitas } from './MantenimientoCitasDC';

export class DoctoR {
  private doctores: Doctor[] = [];
  private citaService: obtenerCitas;

  constructor(citaService: obtenerCitas) {
    this.citaService = citaService;
    this.cargarDoctores();
  }

  private cargarDoctores(): void {
    try {
      const data = fs.readFileSync('./data/doctores.json', 'utf-8');
      this.doctores = JSON.parse(data);
    } catch (error) {
      console.error('Error al cargar los doctores:', error);
    }
  }

  private guardarDoctores(): void {
    fs.writeFileSync('./data/doctores.json', JSON.stringify(this.doctores, null, 2));
  }

  CrearDoctor(doctor: Omit<Doctor, 'id_doctor'>): Doctor {
    const nuevoId = this.doctores.length > 0 ? this.doctores[this.doctores.length - 1].doctorId + 1 : 1;
    const nuevoDoctor: Doctor = { ...doctor, doctorId: nuevoId };
    this.guardarDoctores();
    return nuevoDoctor;
  }

  ActualizarDoctor(id: number, nuevoDoctor: Omit<Doctor, 'id_doctor'>): void {
    const index = this.doctores.findIndex(doctor => doctor.doctorId === id);
    if (index !== -1) {
      this.doctores[index] = { ...nuevoDoctor, doctorId: id };
      this.guardarDoctores();
    }
  }
  

  eliminarDoctor(id: number): void {
    this.doctores = this.doctores.filter(doctor => doctor.doctorId !== id);
    this.guardarDoctores();
  }

  obtenerDoctorId(id: number): Doctor | undefined {
    return this.doctores.find(doctor => doctor.doctorId === id);
  }

  obtenerDoctoresDisponiblesParaFecha(fecha: Date): Doctor[] {
    const doctoresDisponibles: Doctor[] = [];

    for (const doctor of this.doctores) {
      if (this.doctorEstaDisponibleEnFecha(doctor, fecha)) {
        doctoresDisponibles.push(doctor);
      }
    }

    return doctoresDisponibles;
  }

  private doctorEstaDisponibleEnFecha(doctor: Doctor, fecha: Date): boolean {
    const citas = this.citaService.obtenerCitasPorDoctorYFecha(doctor.doctorId, fecha);
    if (citas.length > 0) {
      return false; 
    }

    const diaSemana = fecha.getDay();
    const horario = doctor.horario.find(horario => horario.dia === this.obtenerNombreDia(diaSemana));
    if (!horario) {
      return false; 
    }

    const horaInicio = new Date(`${fecha.toDateString()} ${horario.horaInicio}`);
    const horaFin = new Date(`${fecha.toDateString()} ${horario.horaFin}`);
    if (fecha < horaInicio || fecha > horaFin) {
      return false; 
    }

    return true;
  }

  private obtenerNombreDia(dia: number): string {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return diasSemana[dia];
  }


  obtenerTodosLosDoctores(): Doctor[] {
    return this.doctores;
  }

  obtenerTotalDoctores(): number {
    return this.doctores.length;
  }

  validarDisponibilidadDoctorParaFecha(idDoctor: number, fecha: Date): boolean {
    const doctor = this.obtenerDoctorId(idDoctor);
    if (doctor) {
      return this.doctorEstaDisponibleEnFecha(doctor, fecha);
    }
    return false;
  }
}
