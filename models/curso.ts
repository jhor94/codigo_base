class Curso {
    tipo: string;
    modalidad: string;
    horario: string;
    alumnos: Alumno[] = [];

    constructor(tipo: string, modalidad: string, horario: string) {
        this.tipo = tipo;
        this.modalidad = modalidad;
        this.horario = horario;
    }

    addAlumno(alumno: Alumno): boolean {
        if (this.alumnos.find(item => item.dni === alumno.dni)) {
            console.error("El DNI existe")
            return false;
        } else {
            this.alumnos.push(alumno);
            return true
        }
    }

}