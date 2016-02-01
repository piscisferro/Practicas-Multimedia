// Esto es lo mismo que window.onload = iniciar()
window.addEventListener("load", iniciar, false);

function iniciar() { 
    
    // Datos de la grafica
    var pieChart = [
        {
            value: 90,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },  {   
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },  {   
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },  {   
            value: 40,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },  {   
            value: 10,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }];
    
    // Seleccionamos el elemento lienzo
    var elemento = document.getElementById('lienzo'); 
    
    // Seleccionamos el contexto 2d del elemento que hemos seleccionado antes
    var lienzo = elemento.getContext('2d'); 
    
    // Creamos y pintamos la grafica
    var grafica = new Chart(lienzo).Pie(pieChart);
    
} 
