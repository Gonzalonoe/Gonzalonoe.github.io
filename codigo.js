
/* CARROUSEL 1*/
const carrousel_container_img = document.querySelector(".carrousel_container_img")
const flecha = document.querySelectorAll (".flecha")

flecha.forEach( ( cadaFlecha , i )=> {
    flecha[i].addEventListener("click",()=>{
        carrousel_container_img.style.transform = `translateX(-50%)`
        
        
    })
})

/*CARROUSEL 2*/

let imagenes = [
    "imagenesevento/imagen-1.jpg",
    "imagenesevento/imagen-2.jpg",
    "imagenesevento/imagen-3.jpg",
    "imagenesevento/imagen-4.jpg",
    "imagenesevento/imagen-5.jpg",
    "imagenesevento/imagen-6.jpg",
    "imagenesevento/imagen-7.jpg",
    "imagenesevento/imagen-8.jpg",
    "imagenesevento/imagen-9.jpg"
];

document.imagen.src = imagenes[0];

let flechaderecha = document.querySelector(".flecha_derecha");
let flechaizquierda = document.querySelector(".flecha_izquierda");
let contador = 0;

function derecha(){
    contador++;
    if (contador > imagenes.length - 1){
        contador = 0;
    }
    document.imagen.src = imagenes[contador];
}

flechaderecha.addEventListener("click", derecha)

function izquierda(){
    contador--;
    if (contador < 0){
        contador = imagenes.length - 1;
    }
    document.imagen.src = imagenes[contador];
}

flechaizquierda.addEventListener("click", izquierda);



