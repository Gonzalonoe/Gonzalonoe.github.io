/* FORMULARIO DE CONTACTO */

/*const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const mensaje = document.getElementById ("mensaje")
const checkbox = document.getElementById("checkbox")
const form = document.getElementById("form")
const parrafo = document.getElementById("error")

form.addEventListener("submit", e=>{
	e.preventDefault()
	let error = ""
	parrafo.innerHTML = ""
	let confirm = false
	let regexnombre = /^[a-zA-ZÁ-Ü\S]{1,40}$/
	let regexemail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
	let regextelefono = /^\d{7,16}$/
	let regexmensaje = /^[a-zA-ZÁ-Ü\S]{1,100}$/
	if(regexnombre.test(nombre.value)){
		error += `El nombre no es valido`
		confirm = true
	}
	if (!regexemail.test(email.value)){
		error += ` --El email no es valido-- `
		confirm = true
	}
	if (!regextelefono.test(telefono.value)){
		error += ` --El telefono no es valido-- `
		confirm = true
	}
	if (!regexmensaje.test(telefono.value)){
		error += ` --Porfavor deje un mensaje-- `
		confirm = true
	}
	if(!checkbox.checked){
        error += ` --Porfavor acepte los term. y cond.-- `
		confirm = true
	}
	if(confirm){
		parrafo.innerHTML = error
	}else{
		parrafo.innerHTML = "¡El formulario se envio correctamente!"
	}
})
*/
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const mensaje = document.getElementById ("mensaje")
const checkbox = document.getElementById("checkbox")
const ltaErrores = document.getElementById("ltaErrores");
const ltaMensajes = document.getElementById("ltaMensajes");


function validar() {
	ltaErrores.innerHTML = "";
	nombre.classList.remove("error");
	email.classList.remove("error");
	telefono.classList.remove("error");
	mensaje.classList.remove("error");
	checkbox.classList.remove("error");
	
	let errores = []; 
	let regex_tel = /^[1-9]\d{9}$/;
	let regex_email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	let nbre = nombre.value.trim();

	if(nbre.length == 0) {
		errores.push("Falta el nombre");
		nombre.classList.add("error");
	} else if(nbre.length > 30) {
		errores.push("Nombre muy largo (30 caracteres)");
		nombre.classList.add("error");
	}
		
	if(telefono.value <10 && !regex_tel.test(telefono.value)) {
		errores.push("Teléfono inválido");
		telefono.classList.add("error");
	}

	if(email.value <10 && !regex_email.test(email.value)) {
		errores.push("El Email no es valido");
		email.classList.add("error");
		}

	if(mensaje.value <10) {
		errores.push("Porfavor deje un mensaje");
		mensaje.classList.add("error");
		}

	if(!checkbox.checked){
		errores.push("Porfavor acepte los term. y cond.");
		mensaje.classList.add("error")
	}

	for(let err of errores) {
		let li = document.createElement("li");
		li.innerHTML = err;
		ltaErrores.appendChild(li);
		}

	if(errores.length == 0) {
	let li = document.createElement("li");
	if(telefono.value.length>0) {
		li.innerHTML = `Hola ${nbre}, el fomurlario se envio correctamente`;
		} else {
		li.innerHTML = `Hola ${nbre}, no se pudo enviar el formulario`;
		}

	ltaMensajes.appendChild(li);
	document.forms[0].reset();
	    return false
		} else {
		return false;
		}
	}
