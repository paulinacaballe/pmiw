//https://youtu.be/NJvUMri7Gm8
let juego;
let botonReinicio;
let imgJugador, imgCirculo, imgCuadrado; 

function preload() {
  imgJugador = loadImage('data/jugador.png');
  imgCirculo = loadImage('data/circulo.png');
  imgCuadrado = loadImage('data/cuadrado.png');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  botonReinicio = new BotonReinicio(juego.reiniciarJuego.bind(juego)); 
}

function draw() {
  juego.dibujar();
}
