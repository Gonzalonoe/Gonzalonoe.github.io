const nombre = document.getElementById("nombre")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("error")

form.addEventListener("submit", e=>{
	e.preventDefault()
	let error = ""
	if(nombre.value.length <6){
		alert("El nombre es muy corto")
		error += `El nombre es muy corto`
	}
})