"use strict";
var curso;
function submitCurso() {
    var errores = 0;
    var tipoInput = document.getElementById("tipoInput");
    var horarioInput = document.getElementById("horarioInput");
    var descripcionInput = document.getElementById("descripcionInput");
    curso = new Curso(tipoInput.value, descripcionInput.value);
    if (tipoInput.value.trim() === "") {
        tipoInput.classList.add("is-invalid");
        errores++;
    }
    else {
        tipoInput.classList.remove("is-invalid");
        tipoInput.classList.add("is-valid");
    }
    if (descripcionInput.value.trim() === "") {
        descripcionInput.classList.add("is-invalid");
        errores++;
    }
    else {
        descripcionInput.classList.remove("is-invalid");
        descripcionInput.classList.add("is-valid");
    }
    if (errores === 0) {
        showAlumnoForm();
        showCurso();
    }
    else {
        console.log("error en los datos");
    }
}
function showCurso() {
    var CursoTitle = document.getElementById("CursoTitle");
    var tipoOutput = document.getElementById("tipoOutput");
    var descripcionOutput = document.getElementById("descripcionOutput");
    CursoTitle.innerText = "Curso:";
    tipoOutput.innerText = curso.tipo;
    descripcionOutput.innerText = "descripcion: " + curso.descripcion;
}
function submitAlumnoForm() {
    var errores = 0;
    for (var i = 1; i <= 4; i++) {
        var nombreAlumno = document.getElementById("nombreAlumno" + i);
        var dniAlumno = document.getElementById("dniAlumno" + i);
        var nacimientoAlumno = document.getElementById("nacimientoAlumno" + i);
        if (nombreAlumno.value.trim() === "") {
            nombreAlumno.classList.add("is-invalid");
            errores++;
        }
        else {
            nombreAlumno.classList.remove("is-invalid");
            nombreAlumno.classList.add("is-valid");
        }
        if (dniAlumno.value.trim() === "") {
            dniAlumno.classList.add("is-invalid");
            errores++;
        }
        else {
            dniAlumno.classList.remove("is-invalid");
            dniAlumno.classList.add("is-valid");
        }
        if (nacimientoAlumno.value.trim() === "") {
            nacimientoAlumno.classList.add("is-invalid");
            errores++;
        }
        else {
            nacimientoAlumno.classList.remove("is-invalid");
            nacimientoAlumno.classList.add("is-valid");
        }
        if (errores === 0) {
            var nacimientoFecha = new Date(nacimientoAlumno.value);
            var Alumno_generica = new Alumno(nombreAlumno.value, dniAlumno.value, nacimientoFecha);
            curso.addAlumno(Alumno_generica);
            console.log(curso);
            showalumnos();
        }
        else {
            console.log("error en los datos");
        }
    }
}
function showalumnos() {
    var AlumnoTitle = document.getElementById("AlumnoTitle");
    var AlumnoOutput = document.getElementById("AlumnoOutput");
    AlumnoOutput.innerHTML = "";
    curso.alumnos.forEach(function (alumno, index) {
        AlumnoTitle.innerHTML = ("Alumno");
        AlumnoOutput.innerHTML += "<b>Alumno ".concat(index + 1, ":</b><br> Nombre: ").concat(alumno.nombre, " <br> DNI: ").concat(alumno.dni, " <br> Fecha de Nacimiento: ").concat(alumno.nacimiento.toLocaleDateString(), "<br><br>");
    });
}
function showAlumnoForm() {
    var CursoForm = document.getElementById("create-Curso-form");
    var CursoAlumno = document.getElementById("create-Alumno-form");
    CursoForm.style.display = "block";
    CursoAlumno.style.display = "block";
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');
    // Loop over them and prevent submission
    Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!(form === null || form === void 0 ? void 0 : form.checkValidity())) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();
