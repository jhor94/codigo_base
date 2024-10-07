"use strict";
var Curso = /** @class */ (function () {
    function Curso(tipo, descripcion) {
        this.alumnos = [];
        this.tipo = tipo;
        this.descripcion = descripcion;
    }
    Curso.prototype.addAlumno = function (alumno) {
        if (this.alumnos.find(function (item) { return item.dni === alumno.dni; })) {
            alert("El DNI existe");
            return false;
        }
        else {
            this.alumnos.push(alumno);
            return true;
        }
    };
    return Curso;
}());
