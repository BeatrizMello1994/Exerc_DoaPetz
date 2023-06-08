let menu = document.getElementById("links-navegacao");
let menu_barras = document.getElementById("menu_barras");

function mostrarMenu (){
    console.log("ENTROU");
    if (window.getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
        menu_barras.setAttribute("aria-label", "fechar menu")
        menu_barras.setAttribute("aria-expanded", "true")
    }else{
        menu.style.display = "none"
        menu_barras.setAttribute("aria-label", "abrir menu")
        menu_barras.setAttribute("aria-expanded", "false")

    }
}