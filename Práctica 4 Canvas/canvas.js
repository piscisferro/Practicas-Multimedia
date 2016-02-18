// Variable global lienzo
var elemento; // Variable del elemento canvas
var lienzo; // Variable para guardar el contexto del canvas
var velHorizontal; // 1 o -1
var velVertical; // 1 o -1
var posVertical; // Posicion Vertical de la pelota
var posHorizontal; // Posicion Horizontal de la pelota
var audio; // Variable para guardar el elemento audio

function iniciar() {
    // Guardamos el lienzo en elemento
    elemento = document.getElementById('lienzo');
    
    // Guardamos en la variable audio el elemento audio
    audio = document.getElementById("audio");
    
    // Guardamos en lienzo el contexto 2d del canvas 
    lienzo=elemento.getContext('2d');
    
    posVertical = randomRange(50, elemento.height - 20); // Posicion vertical inicial de la pelota
    posHorizontal = randomRange(50, elemento.width - 20); // Posicion horizontal inicial de la pelota
    
    velHorizontal = 2; // Velocidad horizontal de la pelota
    velVertical = 2; // Velocidad Vertical de la pelota
    
    // Estilos para la pelotita, sera de color azul
    lienzo.fillStyle = "blue";
    
    // Evento para que cuando hagamos click empieze al animacio
    window.addEventListener('click', animacion, false);
}

// Funcion de la animacion
function animacion() {
    
    // Limpiamos el lienzo entero
    lienzo.clearRect(0,0,elemento.width,elemento.height);
    
    /////   CURVA 90º RELLENO  /////
    // Empezamos a dibujar
    lienzo.beginPath();
    
    // 45 grados en radianes
    var radianes=Math.PI/180*360;
    
    // Dibujamos el arco empezando en la posicion x=100 y=75 radio=50px 90grados en radianes direccion true(horario)
    lienzo.arc(posHorizontal, posVertical, 25, 0,radianes, true);
    
    // Pintamos la linea
    lienzo.fill();
    
    // Terminamos este dibujo
    lienzo.closePath();
    
    // Si la pelotita esta dentro de los limites del marco horizontal
    if (posHorizontal > 25 && posHorizontal < elemento.width - 25) {
        // Aumentamos su posicion con la velocidad
        posHorizontal += velHorizontal;
        
    } else { // Si la pelotita llega al final
        
        // Cambiamos el sentido y direccion de la velocidad
        velHorizontal *= -1;
        // Sumamos la posicion a la velocidad
        posHorizontal += velHorizontal;
        // Reiniciamos el audio (por si ya se estaba ejecutando por ejemplo cuando hay 2 botes seguidos)
        audio.currentTime = 0;
        // Reproducimos el audio
        audio.play();
        
    }
    
    // Si la pelotita esta dentro de los limites del marco vertical
    if (posVertical > 25 && posVertical < elemento.height - 30) {
        // Aumentamos su posicion con la velocidad
        posVertical += velVertical;
        
        
    } else {
        // Cambiamos el sentido y direccion de la velocidad
        velVertical *= -1;
        // Sumamos la posicion a la velocidad
        posVertical += velVertical;
        // Reiniciamos el audio (por si ya se estaba ejecutando por ejemplo cuando hay 2 botes seguidos)
        audio.currentTime = 0;
        // Reproducimos el audio
        audio.play();
    }
    
    // Timeout para seguir con la animacion
    setTimeout(animacion, 33);
}


// Funcion Random entre un minimo y un maximo
function randomRange(min, max) {
    
	// Si queremos numeros enteros con esta formula conseguimos que todos los numeros tengan la misma probabilidad de salir
	var resultado = Math.floor((Math.random() * (max - min + 1)) + min);
    
    return resultado;
}

// Evento para iniciar al cargar
window.addEventListener("load", iniciar, false);
