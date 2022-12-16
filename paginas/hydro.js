let barbara = document.querySelector('.barbara')
let btn_barbara = document.querySelector('button.barbara')

let candace = document.querySelector('.candace')
let btn_candace = document.querySelector('button.candace')

let ayato = document.querySelector('.ayato')
let btn_ayato = document.querySelector('button.ayato')

let mona = document.querySelector('.mona')
let btn_mona = document.querySelector('button.mona')

let nilou = document.querySelector('.nilou')
let btn_nilou = document.querySelector('button.nilou')

let kokomi = document.querySelector('.kokomi')
let btn_kokomi = document.querySelector('button.kokomi')

let tartaglia = document.querySelector('.tartaglia')
let btn_tartaglia = document.querySelector('button.tartaglia')

let xingqiu = document.querySelector('.xingqiu')
let btn_xingqiu = document.querySelector('button.xingqiu')

let yelan = document.querySelector('.yelan')
let btn_yelan = document.querySelector('button.yelan')

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