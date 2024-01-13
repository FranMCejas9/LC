let Secciones = ["Inicio","Trabajos","Contacto"]
let ImgTrabajos = [{"url" : "img/1.png"},{"url" : "img/2.png"},{"url" : "img/3.png"},{"url" : "img/4.png"},{"url" : "img/5.png"},{"url" : "img/6.png"}]

let seccionTrabajo = document.querySelector(".trabajosGallery")

let Enlaces = document.querySelector(".enlaces")

let Footer = document.querySelector(".enlacesLista")

Secciones.forEach((seccion)=>{
    Enlaces.innerHTML += `<li><a href="#${seccion}">${seccion}</a></li>` 
    Footer.innerHTML += `<li><a href="#${seccion}">${seccion}</a></li>`
})

function generarImagenes(e){
    e.forEach((img)=>{
        console.log(img.url)
        seccionTrabajo.innerHTML += `<div data-aos="fade-up">
            <img src="${img.url}">
        </div>`
    })
}
generarImagenes(ImgTrabajos)



