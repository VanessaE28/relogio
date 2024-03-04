// DOM

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

// Eventos

setInterval(relogio, 1000)

// Funções

function relogio () {

    let dia = new Date() // mostrar data completa

    let hr = dia.getHours() // mostrando somente as horas
    let min = dia.getMinutes() // mostrando somente os minutos
    let seg = dia.getSeconds() // mostrando somente os segundos

    if (hr < 10) {
        hr="0"+hr // para adicionar o 0 antes do número abaixo de 10
    }

    if (min < 10) {
        min="0"+min
    }
    
    if (seg < 10) {
        seg="0"+seg
    }

    horas.textContent = hr // indo no objeto horas e mudando a variável
    minutos.textContent = min // indo no objeto minutos e mudando a variável
    segundos.textContent = seg // // indo no objeto segundos e mudando a variável

}