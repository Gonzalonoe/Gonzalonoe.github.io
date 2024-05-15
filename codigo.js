
/* CARROUSEL */
const carrousel_container_img = document.querySelector(".carrousel_container_img")
const flecha = document.querySelectorAll (".flecha")

flecha.forEach( ( cadaFlecha , i )=> {
    flecha[i].addEventListener("click",()=>{
        carrousel_container_img.style.transform = "translateX(-50%)"
        
        
    })
})
