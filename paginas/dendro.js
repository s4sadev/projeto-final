let collei = document.querySelector('.collei')
let btn_collei = document.querySelector('button.collei')

let nahida = document.querySelector('.nahida')
let btn_nahida = document.querySelector('button.nahida')

let tigh = document.querySelector('.tigh')
let btn_tigh = document.querySelector('button.tigh')


function Mais_Menos(text , btn) { 
    let up = document.createTextNode('cima')
    let down = document.createTextNode('baixo')
    
        if(text.style.display === 'block') {
            text.style.display = 'none'
            btn.innerHTML = "&#5167;";
        }else {
            text.style.display = 'block'
            btn.innerHTML = "&#5169;";
    }
    }