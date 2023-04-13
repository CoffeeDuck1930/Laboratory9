const contenedorComentarios = document.getElementById("comentario")
const contenedorPrincipal = document.getElementById("comment-sec")
const modal = document.getElementById("Nuevocoment")
const boton = document.getElementById("Publish")
const textarea = document.getElementById("type")

function mostrarModal() {
    Nuevocoment.classList.remove("nomodal")
    Nuevocoment.classList.add("modal")
    Publish.disabled = true;
}

function ocultarModal() {
    Nuevocoment.classList.remove("modal")
    Nuevocoment.classList.add("nomodal")
    Publish.classList.remove("Onbutton")
    Publish.classList.add("Offbutton")
    Publish.disabled = true;
    textarea.value = ""

}

function activarBoton() {
    var value = textarea.value
    if ( value === "") {
        Publish.classList.remove("Onbutton")
        Publish.classList.add("Offbutton")
        Publish.disabled = true;
    } else {
        Publish.classList.remove("Offbutton")
        Publish.classList.add("Onbutton")
        boton.disabled = false;
    }
}

function crearPublicacion() {
    var text = textarea.value
    var comment = `
    <div class="comentario">
        <div class="superiorComentario">
            <img src="pexels-mohamed-abdelghaffar-771742.jpg" alt="profilePic">
            <p >Andrea Andrade</p>
        </div>
        <p class="publicComment">${text}</p>
    </div>
    `
    contenedorComentarios.innerHTML += comment
    ocultarModal()
}
