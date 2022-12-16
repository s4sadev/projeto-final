let jean = document.querySelector(".jean")
let btn_jean = document.querySelector("button.jean")

let kazuha = document.querySelector(".kazuha")
let btn_kazuha = document.querySelector("button.kazuha")

let sayu = document.querySelector('.sayu')
let btn_sayu = document.querySelector('button.sayu')

let heizou = document.querySelector('.heizou')
let btn_heizou = document.querySelector('button.heizou')

let sucrose = document.querySelector('.sucrose')
let btn_sucrose = document.querySelector('button.sucrose')

let venti = document.querySelector('.venti')
let btn_venti = document.querySelector('button.venti')

let xiao = document.querySelector('.xiao')
let btn_xiao = document.querySelector('button.xiao')	

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
