let beidou = document.querySelector('.beidou')
let btn_beidou = document.querySelector('button.beidou')

let cyno = document.querySelector('.cyno')
let btn_cyno = document.querySelector('button.cyno')

let dori = document.querySelector('.dori')
let btn_dori = document.querySelector('button.dori')

let fischl = document.querySelector('.fischl')
let btn_fischl = document.querySelector('button.fischl')

let keqing = document.querySelector('.keqing')
let btn_keqing = document.querySelector('button.keqing')

let sarah = document.querySelector('.sarah')
let btn_sarah = document.querySelector('button.sarah')

let kuki = document.querySelector('.kuki')
let btn_kuki = document.querySelector('button.kuki')

let lisa = document.querySelector('.lisa')
let btn_lisa = document.querySelector('button.lisa')

let razor= document.querySelector('.razor')
let btn_razor = document.querySelector('button.razor')

let raiden= document.querySelector('.raiden')
let btn_raiden = document.querySelector('button.raiden')

let yae = document.querySelector('.yae')
let btn_yae = document.querySelector('button.yae')



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