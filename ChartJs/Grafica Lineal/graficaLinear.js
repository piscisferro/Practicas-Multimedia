// Esto es lo mismo que window.onload = iniciar()
window.addEventListener("load", iniciar, false);

function iniciar() { 
    
    // Datos de la grafica
    var LineChart = {
        labels: ["Elem1", "Elem2", "Elem3", "Elem4", "Elem5"], // Elementos (eje X)
            datasets: [{ 
                        fillColor: "rgba(255,249,19,0.9)", // Color de relleno
                        strokeColor: "rgba(255,0,0,1)", // Color de la linea
                        pointColor: "rgba(0,0,220,1)", // Color de los puntos
                        pointStrokeColor: "#fff", // Color del borde de los puntos
                        data: [30, 10, 50, 20, 90] // Datos numericos de la grafica
                       }, {
                           fillColor: "rgba(252,147,65,0.5)",
                           strokeColor: "rgba(255,255,255,1)",
                           pointColor: "rgba(173,173,173,1)",
                           pointStrokeColor: "#fff",
                           data: [28, 68, 40, 19, 96]
                       }]
        }
    
    // Seleccionamos el elemento lienzo
    var elemento = document.getElementById('lienzo'); 
    
    // Seleccionamos el contexto 2d del elemento que hemos seleccionado antes
    var lienzo = elemento.getContext('2d'); 
    
    // Creamos y pintamos la grafica
    var linear = new Chart(lienzo).Line(LineChart);
    
    
} 

