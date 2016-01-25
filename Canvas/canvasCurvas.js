function iniciar() { 
    // Seleccionamos el elemento lienzo
    var elemento = document.getElementById('lienzo'); 
    
    // Seleccionamos el contexto 2d del elemento que hemos seleccionado antes
    var lienzo = elemento.getContext('2d'); 
    
    // Le damos color al relleno
    lienzo.fillStyle = "#789867";
    
    /////   CURVA 90º LINEA  /////
    // Empezamos a dibujar
    lienzo.beginPath();
    
    // 45 grados en radianes
    var radianes=Math.PI/180*90;
    
    // Dibujamos el arco empezando en la posicion x=100 y=75 radio=50px 90grados en radianes direccion true(horario)
    lienzo.arc(100,75,50,0,radianes, true);
    
    // Pintamos la linea
    lienzo.stroke();
    
    // Terminamos este dibujo
    lienzo.closePath();
    
    
    /////   CURVA 90º RELLENO  /////
    // Empezamos a dibujar
    lienzo.beginPath();
    
    // 45 grados en radianes
    var radianes=Math.PI/180*90;
    
    // Dibujamos el arco empezando en la posicion x=100 y=75 radio=50px 90grados en radianes direccion true(horario)
    lienzo.arc(220,75,50,0,radianes, true);
    
    // Pintamos la linea
    lienzo.fill();
    
    // Terminamos este dibujo
    lienzo.closePath();
    
    /////   CURVA BEIZER Y QUADRATIC BEIZER /////
    // Empezamos a dibujar
    lienzo.beginPath();
    
    // Movemos el lapiz a x=300 y=50 
    lienzo.moveTo(300,50);
    
    // Curva cuadratica puntos de control en 320 y 70, Va desde posicion del lapiz hasta x=500 y=50
    lienzo.quadraticCurveTo(320, 70, 500, 50);
    
    // Movemos el lapiz a x=250 y=50 
    lienzo.moveTo(300,100);
    
    // Curva cuadratica puntos de control 1 en 350, 125, punto de control 2 en 390 200, Va desde posicion del lapiz hasta x=500 y=100
    lienzo.bezierCurveTo(350,125, 390, 200, 500, 100);
    
    // Pintamos todo
    lienzo.stroke();
    
    // Terminamos de dibujar
    lienzo.closePath();
    
    /////   CURVA BEIZER Y QUADRATIC BEIZER RELLENO /////
    // Empezamos a dibujar
    lienzo.beginPath();
    
    // Movemos el lapiz a x=300 y=50 
    lienzo.moveTo(600,50);
    
    // Curva cuadratica puntos de control en 620 y 70, Va desde posicion del lapiz hasta x=800 y=50
    lienzo.quadraticCurveTo(620, 70, 800, 50);
    
    // Movemos el lapiz a x=250 y=50 
    lienzo.moveTo(600,100);
    
    // Curva cuadratica puntos de control 1 en 650, 125, punto de control 2 en 690 200, Va desde posicion del lapiz hasta x=800 y=100
    lienzo.bezierCurveTo(650,125, 690, 200, 800, 100);
    
    // Pintamos todo
    lienzo.fill();
    
    // Terminamos de dibujar
    lienzo.closePath();
} 

// Esto es lo mismo que window.onload = iniciar()
window.addEventListener("load", iniciar, false);