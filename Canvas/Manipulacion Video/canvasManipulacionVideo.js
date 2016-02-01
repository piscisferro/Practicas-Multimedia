// Variables globales
var lienzo;
var video;
var bucle;

// Evento para que al cargar la pagina, se ejecute la funcion iniciar
window.addEventListener("load", iniciar, false);

// Funcion que se ejecuta al cargar la web
function iniciar() {
    // Cargamos el lienzo en elemento
    var elemento = document.getElementById('lienzo');
    // Cargamos el contexto 2d en lienzo
    lienzo = elemento.getContext('2d');
    // Cargamos el video en la variable
    video = document.getElementById('medio');
    // Le añadimos un evento al video
    video.addEventListener('click', presionar, false);
}

// Funcion para que al clickear reproduzca o pause el video dependiendo de su estado
function presionar() {
    // Si el videon esta en play
    if(!video.paused && !video.ended) {
        // Pausamos el video
        video.pause();
        // Limpiamos el intervalo bucle
        window.clearInterval(bucle);
    } else { // Si el video esta pausado
        // Le damos al play
        video.play();
        // bucle con setInterval para aplicar el filtro en canvas
        bucle=setInterval(procesarCuadros, 33);
    }
}

// Funcion para aplicar el filtro en canvas
function procesarCuadros() {
    // Pintamos el video en el canvas
    lienzo.drawImage(video,0,0, 483, 272);
    
    // Cargamos los datos de la imagen del canvas en una variables 
    var info = lienzo.getImageData(0,0,483,272);
    // Inicializamos la variable pos
    var pos;
    // Inicializamos la variable gris
    var gris;
    
    // Bucle for para recorrer todos los pixeles del canvas en horizontal
    for(var x=0; x <= 483; x++) {
        // Bucle for para recorrer todos los pixeles del canvas en vertical
        for(var y=0; y <= 272; y++) {
            // Formula para el array de pixeles rgba
            pos=(info.width * 4 * y) + (x * 4);
            
            // Formula para la escala de grises dependiendo del color
            gris=parseInt(info.data[pos] * 0.2989 + info.data[pos+1] * 0.5870 + info.data[pos+2] * 0.1140);
            
            // Aplicamos el gris a todos los subpixeles
            info.data[pos]=gris;
            info.data[pos+1]=gris;
            info.data[pos+2]=gris;
        }
    }
    // Pintamos el filtro en el canvas
    lienzo.putImageData(info,0,0); 
} 
