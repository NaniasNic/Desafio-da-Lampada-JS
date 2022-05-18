const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function islmapbroken () {
    return lamp.src.indexOf ('quebrada' ) > -1
}

function lampOn () {
    if ( !islmapbroken () ){
        lamp.src = 'aceso.png';
    }
}

function lampOff () {
    if ( !islmapbroken () ){
        lamp.src = 'apagada.png';
    }
}

function lampbroken () {
    lamp.src = 'quebrada.png'
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ( 'mouseover', lampOn);
lamp.addEventListener ( 'mouseleave', lampOff);
lamp.addEventListener ( 'dblclick', lampbroken);