"use strict";
var curso;
function submitCurso() {
    var errores = 0;
    var tipoInput = document.getElementById("tipoInput");
    var horarioInput = document.getElementById("horarioInput");
    var modalidadInput = document.getElementById("modalidadInput");
    curso = new Curso(tipoInput.value, modalidadInput.value, horarioInput.value);
    showCurso();
    showAlumnoForm();
}
function showCurso() {
    var CursoTitle = document.getElementById("CursoTitle");
    var tipoOutput = document.getElementById("tipoOutput");
    var horarioOutput = document.getElementById("horarioOutput");
    var modalidadOutput = document.getElementById("modalidadOutput");
    CursoTitle.innerText = "Curso:";
    tipoOutput.innerText = "tipo: " + curso.tipo;
    horarioOutput.innerText = "horario: " + curso.horario;
    modalidadOutput.innerText = "modalidad: " + curso.modalidad;
}
function submitAlumnoForm() {
    var errores = 0;
    for (var i = 1; i <= 4; i++) {
        var nombreAlumno = document.getElementById("nombreAlumno" + i);
        var dniAlumno = document.getElementById("dniAlumno" + i);
        var nacimientoAlumno = document.getElementById("nacimientoAlumno" + i);
        var nacimientoFecha = new Date(nacimientoAlumno.value);
        var Alumno_generica = new Alumno(nombreAlumno.value, dniAlumno.value, nacimientoFecha);
        curso.addAlumno(Alumno_generica);
        console.log(curso);
        showalumnos();
    }
}
function showalumnos() {
    var AlumnoTitle = document.getElementById("AlumnoTitle");
    var AlumnoOutput = document.getElementById("AlumnoOutput");
    AlumnoOutput.innerHTML = "";
    if (curso.alumnos.length === 0) {
        AlumnoOutput.innerHTML = "No hay alumnos registrados.";
        return;
    }
    curso.alumnos.forEach(function (alumno, index) {
        AlumnoTitle.innerHTML = ("Alumno");
        AlumnoOutput.innerHTML += "<b>Alumno ".concat(index + 1, ":</b><br> Nombre: ").concat(alumno.nombre, " <br> DNI: ").concat(alumno.dni, " <br> Fecha de Nacimiento: ").concat(alumno.nacimiento.toLocaleDateString(), "<br><br>");
    });
}
function showAlumnoForm() {
    var CursoForm = document.getElementById("create-Curso-form");
    var CursoAlumno = document.getElementById("create-Alumno-form");
    CursoForm.style.display = "none";
    CursoAlumno.style.display = "block";
}
