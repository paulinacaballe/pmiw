//https://youtu.be/LozLw4k5fT8
let jugador;
let objetos = [];
let puntuacion = 0;
let totalCirculos = 10;
let circulosAtrapados = 0;
let circulosFallidos = 0;
let cuadradosAtrapados = 0;
let velocidadCaida = 4;
let porcentajeMinimo = 0.8;
let estadoPantalla = 'instrucciones'; // Estado actual de la pantalla
let juego;
let imgJugador, imgCirculo, imgCuadrado; // Variables para las imágenes

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
