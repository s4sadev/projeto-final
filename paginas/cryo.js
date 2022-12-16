let aloy = document.querySelector('.aloy')
let btn_aloy = document.querySelector('button.aloy')

let chong = document.querySelector('.chong')
let btn_chong = document.querySelector('button.chong')

let diona = document.querySelector('.diona')
let btn_diona = document.querySelector('button.diona')

let eula = document.querySelector('.eula')
let btn_eula = document.querySelector('button.eula')

let ganyu = document.querySelector('.ganyu')
let btn_ganyu = document.querySelector('button.ganyu')

let kaeya = document.querySelector('.kaeya')
let btn_kaeya = document.querySelector('button.kaeya')

let ayaka = document.querySelector('.ayaka')
let btn_ayaka = document.querySelector('button.ayaka')

let layla = document.querySelector('.layla')
let btn_layla = document.querySelector('button.layla')

let qiqi = document.querySelector('.qiqi')
let btn_qiqi = document.querySelector('button.qiqi')

let rosaria = document.querySelector('.rosaria')
let btn_rosaria = document.querySelector('button.rosaria')

let shenhe = document.querySelector('.shenhe')
let btn_shenhe = document.querySelector('button.shenhe')


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