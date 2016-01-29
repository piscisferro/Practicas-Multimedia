// Variable global lienzo
var lienzo;

function iniciar() {
    // Guardamos el lienzo en elemento
    var elemento=document.getElementById('lienzo');
    
    // Guardamos en lienzo el contexto 2d del canvas 
    lienzo=elemento.getContext('2d');
    
    // Añadimos un listener de eventos para cada vez que se mueva el raton
    window.addEventListener('mousemove', animacion, false);
}

// Funcion para crear y animar los ojos
function animacion(e) {
    
    // Borramos el lienzo entero
    lienzo.clearRect(0,0,1000,1000);
    
    // Recogemos la posicion x del puntero del raton
    var xraton = e.clientX;
    // Recogemos la posicion y del puntero del raton
    var yraton = e.clientY;
    
    // Definimos el centro del ojo izquierdo
    var xcentroI = 220;
    var ycentroI = 150;
    
    // Definimos el centro del ojo derecho
    var xcentroD = 270;
    var ycentroD = 150;
    
    // Calculamos el angulo que hay entre el raton y el ojo izquierdo
    var anguloI = Math.atan2(xraton - xcentroI, yraton - ycentroI);
    
    // Calculamos el seno (para x) del ojo izquierdo
    var xI = xcentroI + Math.round(Math.sin(anguloI)*10);
    // Calculamos el coseno (para y) del ojo izquierdo
    var yI = ycentroI + Math.round(Math.cos(anguloI)*10);
    
    // Calculamos el angulo que hay entre el raton y el ojo derecho
    var anguloD = Math.atan2(xraton - xcentroD, yraton - ycentroD);
    
    // Calculamos el seno (para x) del ojo derecho
    var xD = xcentroD + Math.round(Math.sin(anguloD)*10);
    // Calculamos el coseno (para y) del ojo derecho
    var yD = ycentroD + Math.round(Math.cos(anguloD)*10);
    
    // Empezamos a dibujar los ojos
    lienzo.beginPath();
    
    // Dibujamos el circulo que sera el ojo izquierdo
    lienzo.arc(xcentroI, ycentroI, 20, 0, Math.PI * 2, false);
    
    // Nos movemos a la posicion del ojo derecho + el radio de ojo
    lienzo.moveTo(xcentroD + 20, ycentroD);
    
    // Dibujamos el circulo que sera el ojo derecho
    lienzo.arc(xcentroD, ycentroD, 20, 0, Math.PI * 2, false);
    
    // Lo pintamos
    lienzo.stroke();
    
    // Empezamos a dibujar los iris
    lienzo.beginPath();
    
    // Movemos el puntero al centro x y que esta basado en el seno y coseno del angulo entre el ojo y el puntero
    lienzo.moveTo(xI, yI);
    
    // Creamos el iris izquierdo 
    lienzo.arc(xI, yI, 10, 0, Math.PI * 2, false);
    
    // Movemos el puntero a la posicion del ojo derecho
    lienzo.moveTo(xD, yD); 
    
    // Creamos el iris derecho
    lienzo.arc(xD, yD, 10, 0, Math.PI * 2, false); 
    
    // Lo dibujamos
    lienzo.fill(); 
} 

// Evento para iniciar al cargar
window.addEventListener("load", iniciar, false);