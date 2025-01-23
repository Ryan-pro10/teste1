const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function Mostrarform() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}

    function esconderform() {
        form.style.left = "-316px"
        form.style.transform = "translatex(0)"
        mascara.style.visibility = "hidden"
}