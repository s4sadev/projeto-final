let amber = document.querySelector('.amber')
let btn_amber = document.querySelector('button.amber')

let bennett = document.querySelector('.bennett')
let btn_bennett = document.querySelector('button.bennett')

let diluc = document.querySelector('.diluc')
let btn_diluc = document.querySelector('button.diluc')

let hutao = document.querySelector('.hutao')
let btn_hutao = document.querySelector('button.hutao')

let klee = document.querySelector('.klee')
let btn_klee = document.querySelector('button.klee')

let thoma = document.querySelector('.thoma')
let btn_thoma = document.querySelector('button.thoma')

let xiangling = document.querySelector('.xiangling')
let btn_xiangling = document.querySelector('button.xiangling')

let xinyan = document.querySelector('.xinyan')
let btn_xinyan = document.querySelector('button.xinyan')

let yanfei = document.querySelector('.yanfei')
let btn_yanfei = document.querySelector('button.yanfei')

let yoimiya = document.querySelector('.yoimiya')
let btn_yoimiya = document.querySelector('button.yoimiya')

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