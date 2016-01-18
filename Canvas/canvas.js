function iniciar() { 
    // Seleccionamos el elemento lienzo
    var elemento = document.getElementById('lienzo'); 
    
    // Seleccionamos el contexto 2d del elemento que hemos seleccionado antes
    var lienzo = elemento.getContext('2d'); 
    
    /////// RECTANGULO /////////
    
    // Color del relleno
    lienzo.fillStyle="#000099"; 
    
    // Color de la linea
    lienzo.strokeStyle="#990000";
    
    // Dibuja un rectangulo posicion x = 100, posicion y = 100. 120px alto x 120 ancho.
    lienzo.strokeRect(100,100,120,120); 
    
    // Dibuja un rectangulo solido posicion x = 110, posicion y = 110. 100px alto x 100 ancho.
    lienzo.fillRect(110,110,100,100); 
    
    // Dibuja un rectangulo en blanco (goma de borrar) x=120 y=120 h=80 a=80
    lienzo.clearRect(120,120,80,80);
    
    
    ///// TRIANGULO HUECO ///////
    
    // Color de la linea    
    lienzo.strokeStyle = "#00a300";
    
    // Empezamos el dibujo
    lienzo.beginPath();
    
    // Ponemos el lapiz en x=150 y=150
    lienzo.moveTo(400, 100);
    
    // Desde el punto anterior dibujamos una linea a x=200 y=200
    lienzo.lineTo(350,200); 
    
    // Desde el punto primero (donde esta el lapiz) dibujamos una linea a x=200 y=200
    lienzo.lineTo(450,200); 
    
    // Cerramos el dibujo (dibuja la linea desde el ultimo punto al origen)
    lienzo.closePath();
    
    // Pintamos las lineas 
    lienzo.stroke();
    
    ///// TRIANGULO RELLENO ///////
    
    // Color de la linea    
    lienzo.fillStyle = "#fff500";
    
    // Empezamos el dibujo
    lienzo.beginPath();
    
    // Ponemos el lapiz en x=150 y=150
    lienzo.moveTo(500, 100);
    
    // Desde el punto anterior dibujamos una linea a x=200 y=200
    lienzo.lineTo(450,200); 
    
    // Desde el punto primero (donde esta el lapiz) dibujamos una linea a x=200 y=200
    lienzo.lineTo(550,200);
    
    // Pintamos el triangulo (con fill no se necesita closepath())
    lienzo.fill();
    
    ///// UTILIZANDO CLIP ////////
    
    // Comenzamos el dibujo
    lienzo.beginPath(); 
    
    // Movemos el lapiz al punto de partida del triangulo para el clip
    lienzo.moveTo(650,100); 
    // Hacemos una linea desde el punto de origen
    lienzo.lineTo(550,200);
    // Hacemos otra desde el punto de origen 
    lienzo.lineTo(750,200); 
    
    // Hacemos un clip al triangulo
    lienzo.clip(); 
    
    // Cerramos el dibujo
    lienzo.beginPath(); 
    
    // Este for pinta todo el lienzo entero de lineas cada 10 pixeles
    for(var i = 0; i < 1000; i = i + 10) { 
        lienzo.moveTo(0, i); 
        lienzo.lineTo(1000, i); 
    } 
    
    // Pintamos las lineas
    lienzo.stroke();
    
    
} 

// Esto es lo mismo que window.onload = iniciar()
window.addEventListener("load", iniciar, false);