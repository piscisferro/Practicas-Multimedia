function iniciar() { 
    // Seleccionamos el elemento lienzo
    var elemento = document.getElementById('lienzo'); 
    
    // Seleccionamos el contexto 2d del elemento que hemos seleccionado antes
    var lienzo = elemento.getContext('2d'); 
    
    // Definimos la fuente y el tamaño como en CSS
    lienzo.font="bold 24px verdana, sans-serif"; 
    
    // Utilizamos save() para guardar la transformacion inicial del lienzo 
    // dado que las transformaciones se heredan
    lienzo.save();
     
    
    /////   TEXTO SIN TRANSFORMACION RELLENO Y SIN RELLENO  /////
    // Posicion del texto, puede ser start, left, right, center o end
    lienzo.textAlign="start"; 
    
    // Pintamos el mensaje en x=0 y=50
    lienzo.fillText("Texto sin Transform", 0, 50);
    
    // Pintamos el mensaje en x=0 y=50
    lienzo.strokeText("Texto sin Transform", 0, 100);
    
    
    
    /////   TRASLADAR CANVAS    /////
    // Transladamos el canvas a x=250 y=250
    lienzo.translate(250, 250);
    
    // Pintamos el mensaje en x=0 y=0
    lienzo.fillText("Texto transladado", 0, 0);
    
    
    
    /////   ESCALAR CANVAS      /////
    // Escalamos el texto al doble de su tamaño
    lienzo.scale(2, 2);
    
    // Pintamos el mensaje en x=0 y=0 (se hereda el ultimo transladado)
    lienzo.fillText("Texto Escalado", 0, -25);
    
    
    
    /////   ROTAR CANVAS        /////
    // Reinicializamos los valores del lienzo que hemos guardado al principio
    lienzo.restore();
    
    // Rotamos el lienzo 45º
    lienzo.rotate(Math.PI/180*45);
    
    // Pintamos el mensaje en x=0 y=0 (se hereda el ultimo transladado)
    // ATENCION la posicion es respecto a una vez rotado. (es decir en este caso se mueve en diagonal)
    lienzo.fillText("Texto Rotado", 100, 100);
} 

// Esto es lo mismo que window.onload = iniciar()
window.addEventListener("load", iniciar, false);