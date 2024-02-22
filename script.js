const botaoAbrir = document.querySelector(".header-mobule > button")
const botaoFechar = document.querySelector(".header-mobuile nav button")

const body = document.querySelecton("body")
const nav = document.querySelector(".header-mobile nav")


console.log(body)

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abrirMenu() {
    body.classlist.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}