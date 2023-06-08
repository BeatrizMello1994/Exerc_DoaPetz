let menu_barras = document.getElementById("menu_barras");
let links_navegacao = document.getElementById("links-navegacao");

function ocultareExibirMenu() {
    if (window.getComputedStyle(links_navegacao).display == "none") {
        links_navegacao.style.display = "flex"
        menu_barras.setAttribute("aria-label", "fechar menu")
        menu_barras.setAttribute("aria-expanded", "true")
    }else{
        links_navegacao.style.display = "none"
        menu_barras.setAttribute("aria-label", "abrir menu")
        menu_barras.setAttribute("aria-expanded", "false")

    }
}