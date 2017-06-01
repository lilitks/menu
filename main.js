'use strict';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


// pongo un tamaño a la pantalla de todo lo que se vea en nuestro navegador.
//canvas.setAttribute('height', window.innerHeight);
//canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', "300px");
canvas.setAttribute('width', "300px");


//con fillStyle crea el color de relleno.
ctx.fillStyle = '#fabada';
// fillRect crea un cuadrado y podemos darle el ancho y el alto
// el 0,0 son las cordenadas desde las que comenzamos
//podemos poner tamaño en vez de window.innerWidth...
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);



//creamos una funcion que actua cuando se hace click dentro del canvas.
function handleClic(event) {
  //offsetLeft y Top, se utilizan para tener en cuenta el espacio entre
  //la parte superior y el comienzo del canvas

  var x = event.clientX - canvas.offsetLeft; // x es la cordenada x del raton, y la coordenada y.
  var y = event.clientY - canvas.offsetTop;
  var radius = 5 + Math.round(Math.random() * 30); // le decimos que nos cree un radio con un tamaño random. El 5 es el minimo.

  ctx.fillStyle = 'white'; //le decimos de que color va a ser la forma.
  ctx.beginPath();  //empezar forma
  ctx.arc(x, y, radius, 0, 2 * Math.PI); //arc para decir donde empieza la circunferencia, las coordenadas.
  ctx.fill();  // drawImage(img 0,0)
}

canvas.addEventListener('click', handleClic); //llamamos a la funcion con el evento click.
