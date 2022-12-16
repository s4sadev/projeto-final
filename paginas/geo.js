let albedo = document.querySelector(".albedo");
let btn_albedo = document.querySelector('button.albedo')

let itto = document.querySelector('.itto')
let btn_itto = document.querySelector('button.itto')

let gorou = document.querySelector('.gorou')
let btn_gorou = document.querySelector('button.gorou')

let ning= document.querySelector('.ning')
let btn_ning = document.querySelector('button.ning')

let noelle = document.querySelector('.noelle')
let btn_noelle = document.querySelector('button.noelle')

let yunjin = document.querySelector('.yunjin')
let btn_yunjin = document.querySelector('button.yunjin')

let zhongli = document.querySelector('.zhongli')
let btn_zhongli = document.querySelector('button.zhongli')


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
