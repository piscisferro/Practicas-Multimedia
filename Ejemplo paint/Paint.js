// JavaScript Document

	var pintar=false;
	var color="#000";
	
function iniciar(){
		

		var elemento=document.getElementById('lienzo');
		var BColorrojo=document.getElementById('rojo');
		var BColorverde=document.getElementById('verde');
		var BColorazul=document.getElementById('azul');
		var BColorborrar=document.getElementById('borrar');
		var BPerro=document.getElementById('perro');
		lienzo=elemento.getContext('2d');
		window.addEventListener('mousemove', animacion1, false);
		window.addEventListener('mousedown', animacion2, false);
		window.addEventListener('mouseup', animacion3, false);
		BColorrojo.addEventListener('click',cambiocolorojo,false);
		BColorverde.addEventListener('click',cambiocolorverde,false);
		BColorazul.addEventListener('click',cambiocolorazul,false);
		BColorborrar.addEventListener('click',cambiocolorborrar,false);
		BPerro.addEventListener('click',pintarimagen,false);
	} 
	//Necesitaremos el Objeto Math, eventos y propiedades:
	// http://www.w3schools.com/jsref/jsref_obj_math.asp
	

function pintarimagen(e){
	var imagen=new Image(); //Creamos un objeto para manipular las imágenes.
	imagen.src="perro.gif";
	console.log(imagen);
	lienzo.drawImage(imagen,150,0);


}



function cambiocolorojo(e){
	color="#F00";
}
function cambiocolorverde(e){
	color="#0F0";
}
function cambiocolorazul(e){
	color="#00F";
}
function cambiocolorborrar(e){
	lienzo.clearRect(0,0,900,300);
}


function animacion2(e){
		
		pintar=true;
		var xraton=e.clientX-220;
		var yraton=e.clientY-60;
		
		
		lienzo.beginPath();
		
		lienzo.fillstyle=color;
		
		lienzo.arc(xraton,yraton,5,0,Math.PI*2, false);
		lienzo.fill();
	
	} 

	function animacion1(e){
		
		if (pintar){

		var xraton=e.clientX-220;
		var yraton=e.clientY-60;
		document.getElementById('audio').play();
		
		lienzo.beginPath();
		
		lienzo.fillStyle=color
		

		lienzo.arc(xraton,yraton,5,0,Math.PI*2, false);
		lienzo.fill();
		}
	
	}
	function animacion3(){
		
		pintar=false;
		
	
	} 

window.addEventListener("load", iniciar, false); //manejador de Load de Windows