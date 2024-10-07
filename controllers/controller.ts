let curso: Curso;


function submitCurso() {
    let errores = 0;

    let tipoInput = <HTMLInputElement>document.getElementById("tipoInput");
    let horarioInput = <HTMLInputElement>document.getElementById("horarioInput");
    let modalidadInput = <HTMLInputElement>document.getElementById("modalidadInput");

    curso = new Curso(tipoInput.value, modalidadInput.value, horarioInput.value);
    showCurso();
    showAlumnoForm();


}

function showCurso() {
    let CursoTitle = <HTMLInputElement>document.getElementById("CursoTitle");
    let tipoOutput = <HTMLInputElement>document.getElementById("tipoOutput");
    let horarioOutput = <HTMLInputElement>document.getElementById("horarioOutput");
    let modalidadOutput = <HTMLInputElement>document.getElementById("modalidadOutput");

    CursoTitle.innerText = "Curso:";
    tipoOutput.innerText = "tipo: " + curso.tipo;
    horarioOutput.innerText = "horario: " + curso.horario;
    modalidadOutput.innerText = "modalidad: " + curso.modalidad;

}

function submitAlumnoForm() {
    let errores = 0;

    for (let i = 1; i <= 4; i++) {
        let nombreAlumno = <HTMLInputElement>document.getElementById("nombreAlumno" + i);
        let dniAlumno = <HTMLInputElement>document.getElementById("dniAlumno" + i);
        let nacimientoAlumno = <HTMLInputElement>document.getElementById("nacimientoAlumno" + i);


        let nacimientoFecha = new Date(nacimientoAlumno.value)
        let Alumno_generica = new Alumno( nombreAlumno.value, dniAlumno.value, nacimientoFecha);

        curso.addAlumno(Alumno_generica);
        console.log(curso)
        showalumnos();
    }
  
}

function showalumnos() {

    let AlumnoTitle = <HTMLInputElement>document.getElementById("AlumnoTitle");
    let AlumnoOutput = <HTMLInputElement>document.getElementById("AlumnoOutput");
    AlumnoOutput.innerHTML = ""


    if (curso.alumnos.length === 0) {
        AlumnoOutput.innerHTML = "No hay alumnos registrados.";
        return;
    }

    curso.alumnos.forEach((alumno, index) => {
        AlumnoTitle.innerHTML = ("Alumno")
        AlumnoOutput.innerHTML += `<b>Alumno ${index + 1}:</b><br> Nombre: ${alumno.nombre} <br> DNI: ${alumno.dni} <br> Fecha de Nacimiento: ${alumno.nacimiento.toLocaleDateString()}<br><br>`;
    });

}


function showAlumnoForm() {
    let CursoForm = <HTMLInputElement>document.getElementById("create-Curso-form");
    let CursoAlumno = <HTMLInputElement>document.getElementById("create-Alumno-form");
    CursoForm.style.display = "block";
    CursoAlumno.style.display = "block";

}