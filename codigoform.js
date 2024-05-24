/* FORMULARIO DE CONTACTO */

const nombre = document.getElementById("nombre")
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
