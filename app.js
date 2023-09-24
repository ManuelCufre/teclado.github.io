const teclas = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

function numeroRandom(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(max-min+1))+min;
}

function teclaRandom(){
    return teclas [numeroRandom(0, teclas.length -1)]
    
}

function buscarTecla(){
    const teclaSeleccionada = document.getElementById(teclaRandom())
    teclaSeleccionada.classList.add('tecla-seleccionada')
}

document.addEventListener('keyup', function(event) {
    const teclaPrecionada = String.fromCharCode(event.keyCode)
    const teclaBuscar = document.getElementById(teclaPrecionada)
    const teclaSelec = document.querySelector('.tecla-seleccionada')
    teclaBuscar.classList.add('tecla-precionada')

    teclaBuscar.addEventListener('animationend', () =>{
        teclaBuscar.classList.remove('tecla-precionada')
    })

    if(teclaPrecionada === teclaSelec.innerHTML){
        teclaSelec.classList.remove('tecla-seleccionada')
        buscarTecla()
    }
});

buscarTecla()
