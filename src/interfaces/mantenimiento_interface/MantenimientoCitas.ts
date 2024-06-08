import { readFileSync, writeFileSync } from 'fs';
import { Cita } from '../cita.interface';

const direccionArchivoCitas = './data/citas.json';


const lecturaCitas = (): Cita[] => {
    const archivo: string = readFileSync(direccionArchivoCitas, 'utf8');
    if (archivo.trim() === '') return [];
    return JSON.parse(archivo) as Cita[];
}


const escrituraCitas = (citas: Cita[]) => {
    writeFileSync(direccionArchivoCitas, JSON.stringify(citas, null, 2));
}


const programarCita = (pacienteId: number, doctorId: number, fecha: string, descripcion: string): void => {
    const citas = lecturaCitas();
    const nuevaCita: Cita = {
        citaId: citas.length + 1,
        pacienteId,
        doctorId,
        fecha,
        descripcion,
        estado: 'programada',
    };
    citas.push(nuevaCita);
    escrituraCitas(citas);
    console.log('Cita programada para el paciente ID ${pacienteId} con el doctor ID ${doctorId} en ${fecha} a las ${hora}');
}


const cancelarCita = (citaId: number): void => {
    const citas = lecturaCitas();
    const cita = citas.find(c => c.citaId === citaId);
    if (!cita) {
        console.log('Cita no encontrada.');
        return;
    }
    cita.estado = 'cancelada';
    escrituraCitas(citas);
    console.log('Cita cancelada: ID ${citaId}');
}


const reprogramarCita = (citaId: number, nuevaFecha: string, nuevaHora: string): void => {
    const citas = lecturaCitas();
    const cita = citas.find(c => c.citaId === citaId);
    if (!cita) {
        console.log('Cita no encontrada.');
        return;
    }
    cita.fecha = nuevaFecha;
    cita.estado = 'programada';
    escrituraCitas(citas);
    console.log('Cita reprogramada: ID ${citaId} para ${nuevaFecha} a las ${nuevaHora}');
}


const obtenerCitasDoctor = (doctorId: number): Cita[] => {
    const citas = lecturaCitas();
    const citasDoctor = citas.filter(c => c.doctorId === doctorId);
    console.log('Citas del doctor ID ${doctorId}:, citasDoctor');
    return citasDoctor;
}


const obtenerCitasPaciente = (pacienteId: number): Cita[] => {
    const citas = lecturaCitas();
    const citasPaciente = citas.filter(c => c.pacienteId === pacienteId);
    console.log('Citas del paciente ID ${pacienteId}:, citasPaciente');
    return citasPaciente;
}

const obtenerCitasPorFecha = (fecha: string): Cita[] => {
    const citas = lecturaCitas();
    const citasFecha = citas.filter(c => c.fecha === fecha);
    console.log('Citas para la fecha ${fecha}:, citasFecha');
    return citasFecha;
}

export { programarCita, cancelarCita, reprogramarCita, obtenerCitasDoctor, obtenerCitasPaciente, obtenerCitasPorFecha }
