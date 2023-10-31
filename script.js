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