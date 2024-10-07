class Curso {
    tipo: string;
    descripcion: string;
    alumnos: Alumno[] = [];

    constructor(tipo: string, descripcion: string,) {
        this.tipo = tipo;
        this.descripcion = descripcion;
    }

    addAlumno(alumno: Alumno): boolean {
        if (this.alumnos.find(item => item.dni === alumno.dni)) {
            alert("El DNI existe")
            return false;
        } else {
            this.alumnos.push(alumno);
            return true
        }
    }

}