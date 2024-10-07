let curso: Curso;


function submitCurso() {
    let errores = 0;

    let tipoInput = <HTMLInputElement>document.getElementById("tipoInput");
    let horarioInput = <HTMLInputElement>document.getElementById("horarioInput");
    let descripcionInput = <HTMLInputElement>document.getElementById("descripcionInput");

    curso = new Curso(tipoInput.value, descripcionInput.value);

    

    if (tipoInput.value.trim() === "") {
		tipoInput.classList.add("is-invalid");
        errores ++
	} else {
		tipoInput.classList.remove("is-invalid");
		tipoInput.classList.add("is-valid");
	}

    if (descripcionInput.value.trim() === "") {
		descripcionInput.classList.add("is-invalid");
        errores ++
	} else {
		descripcionInput.classList.remove("is-invalid");
		descripcionInput.classList.add("is-valid");

	}

    if(errores === 0 ){
        showAlumnoForm();
        showCurso();
    } else{
        console.log("error en los datos")
    }

}

function showCurso() {
    let CursoTitle = <HTMLInputElement>document.getElementById("CursoTitle");
    let tipoOutput = <HTMLInputElement>document.getElementById("tipoOutput");
    let descripcionOutput = <HTMLInputElement>document.getElementById("descripcionOutput");

    CursoTitle.innerText = "Curso:";
    tipoOutput.innerText = curso.tipo;
    descripcionOutput.innerText = "descripcion: " + curso.descripcion;

}


function submitAlumnoForm() {
    let errores = 0;

    for (let i = 1; i <= 4; i++) {
        let nombreAlumno = <HTMLInputElement>document.getElementById("nombreAlumno" + i);
        let dniAlumno = <HTMLInputElement>document.getElementById("dniAlumno" + i);
        let nacimientoAlumno = <HTMLInputElement>document.getElementById("nacimientoAlumno" + i);


        if (nombreAlumno.value.trim() === "" ) {
            nombreAlumno.classList.add("is-invalid");
            errores ++
        } else {
            nombreAlumno.classList.remove("is-invalid");
            nombreAlumno.classList.add("is-valid");

        }

        if (dniAlumno.value.trim() === "") {
            dniAlumno.classList.add("is-invalid");
            errores ++
        } else {
            dniAlumno.classList.remove("is-invalid");
            dniAlumno.classList.add("is-valid");
        }

        if (nacimientoAlumno.value.trim() === "") {
            nacimientoAlumno.classList.add("is-invalid");
            errores ++
        } else {
            nacimientoAlumno.classList.remove("is-invalid");
            nacimientoAlumno.classList.add("is-valid");
        }

        if(errores === 0) {
            let nacimientoFecha = new Date(nacimientoAlumno.value)
            let Alumno_generica = new Alumno( nombreAlumno.value, dniAlumno.value, nacimientoFecha);
            curso.addAlumno(Alumno_generica);
            console.log(curso)
            showalumnos();

        }else{
            console.log("error en los datos")
        }
    }
  
}

function showalumnos() {

    let AlumnoTitle = <HTMLInputElement>document.getElementById("AlumnoTitle");
    let AlumnoOutput = <HTMLInputElement>document.getElementById("AlumnoOutput");
    AlumnoOutput.innerHTML = ""

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

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!(form as HTMLFormElement)?.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()