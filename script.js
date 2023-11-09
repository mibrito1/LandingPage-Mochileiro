const painels = document.querySelectorAll('.painel')

painels.forEach(painel => {
    painel.addEventListener('click', () => {
        removeActiveClass()
        painel.classList.add('active')
    })
})

function removeActiveClass() {
    painels.forEach(painel => {
        painel.classList.remove('active')
    })
}

const menuMobile = document.getElementById('menu-mobile')
const btn = document.getElementById('btn-menu')
menuMobile.addEventListener('click', animar)

function animar() {
    menuMobile.classList.toggle('abrir-menu')
    btn.classList.toggle('ativar')
}