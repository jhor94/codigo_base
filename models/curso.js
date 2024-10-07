"use strict";
var Curso = /** @class */ (function () {
    function Curso(tipo, modalidad, horario) {
        this.alumnos = [];
        this.tipo = tipo;
        this.modalidad = modalidad;
        this.horario = horario;
    }
    Curso.prototype.addAlumno = function (alumno) {
        if (this.alumnos.find(function (item) { return item.dni === alumno.dni; })) {
            console.error("El DNI existe");
            return false;
        }
        else {
            this.alumnos.push(alumno);
            return true;
        }
    };
    return Curso;
}());
