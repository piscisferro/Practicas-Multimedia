function iniciar() {  
    
    // Inicializamos la variable imagen
    var imagen = new Image();
    // Guardamos la ruta de la imagen
    imagen.src = "img/imagen.png";
    // Añadimos un Listener para cuando cargue la imagen se lanze la funcion
    imagen.addEventListener("load", modificarImagen, false);
    
} 

// Esta funcion modifica la imagen y le da un filtro de negativo en una porcion y ademas invierte la rotacion
function modificarImagen(e) {
    
    // Seleccionamos la imagen desde el evento Listener (.target selecciona el elemento que ha lanzado el evento)
    var imagen=e.target;
    
    // Seleccionamos el elemento lienzo
    var elemento = document.getElementById('lienzo'); 
    
    // Seleccionamos el contexto 2d del elemento que hemos seleccionado antes
    var lienzo = elemento.getContext('2d');

    // Pintamos la imagen en posicion x=0 y=0
    lienzo.drawImage(imagen, 0, 0);

    // Seleccionamos y recogemos en info los datos RGBA de una porcion de la imagen en este caso
    // Desde la posicion x=50 y=50 200px de ancho y 200px de alto, nos devuelve un array
    var info=lienzo.getImageData(50,50,350,300);
    
    // Creamos la variable auxiliar que es una copia de info
    var auxInfo = info;

    // Variable auxiliar de posicion
    var pos;
    
    // Variable auxiliar para usar en el array
    var maxPos = (info.width * 4 * info.height) + (info.width * 4);
    
    // Bucle para recorrer el array info que nos ha devuelto getImageData y hacer el negativo
    // Recorremos el ancho con X
    for (var x = 0; x <= info.width; x++) {
        // Recorremos el alto con Y
        for (var y = 0; y <= info.height; y++) {
            
            // Formula para coger RGBa puesto que la informacion esta guardad en un array
            // unidimensional
            pos = (info.width * 4 * y) + (x * 4);
            
            // Modificamos el Red (rojo)
            info.data[pos] = 255-info.data[pos];
            // Modificamos el Green (verde)
            info.data[pos+1] = 255-info.data[pos+1];
            // Modificamos el Blue (azul)
            info.data[pos+2] = 255-info.data[pos+2];
        }
    }
    
    // Aplicamos la modificacion del negativo en x=50 y=50
    lienzo.putImageData(auxInfo, 50, 50);
}
    

// Esto es lo mismo que window.onload = iniciar()
window.addEventListener("load", iniciar, false);