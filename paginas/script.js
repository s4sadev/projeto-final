var btnMais = document.querySelector(".btn_lermais")
var text = document.querySelector(".descript")
var btn_down = document.createTextNode('U+142F')
var btn_up = document.createTextNode('U+1431')

btnMais.addEventListener('click', function () {

    if(text.style.display === 'block') {
        text.style.display = 'none'
        btnMais.innerHTML = '&#5167;'
    }else {
        text.style.display = 'block'
        btnMais.innerHTML = '&#5169;'
    }
})

