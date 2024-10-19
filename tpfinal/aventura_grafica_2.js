let imagenes = [];
let imagenActual;
let indiceMensajeActual = 0;

let mensajes = [
  "ZzZzZzZz",
  "- Momento de comenzar un nuevo dia!",
  "Rigby: Al fin despiertas! Vamos de excursion, apurate!",
  "- Tal vez unos fideos antes de salir...", 
  "Ya estoy listo, vamos!", 
  "Mordecai: a donde vamos exactamente?\nBenson: a una montaña magica!",
  "*Benson explica camino a la montaña* \n*Mordecai y Rigby se distraen* ", // Texto para la imagen 6
  "Benson explica camino a la montaña.", // Texto para la imagen nt.6 mo
  "Benson: vamos a explorar!", 
  "Mordecai: Debi prestarle atension a Benson...",
  "Mordecai se ha perdido.",
  "Mordecai y Rigby encuentran un mapa del tesoro.\n*Deciden seguirlo*",
  "Mordecai se topa con dos caminos ¿Cual deberia elegir?", 
  "Dejando de tomar sus medicamentos, Torito\npierde la vida, dejando detrás suyo un pasado\nde fama, reconocimiento y orgullo",
  "Esta es la pantalla final donde Torito reflexiona\nsobre su vida y decisiones.",
  "Encontraron montaña", //15
  "caca"
];

let opcionesBotones = [
  ["Siguiente"], 
  ["Siguiente"], 
  ["Tomarse un momento", "Apurarse"], 
  ["Siguiente"], 
  ["Siguiente"],  
  ["Prestar atencion", "Distraerse"],  
  ["Siguiente"], 
  ["Siguiente"],  
  ["Siguiente"],  
  ["Siguiente"], 
  ["volver a empezar"], 
  ["Siguiente"], 
  ["izquierda","derecha"], 
  ["Siguiente"], 
  ["seguir explorando", "volver juntos"],
  ["caca"],
  ["caca2"]//15
];

function preload() {
  for (let i = 1; i < 16; i++) { 
    imagenes.push(loadImage(`data/nt.${i}.jpg`));
  }
}

function setup() {
  createCanvas(640, 480);
  imagenActual = imagenes[indiceMensajeActual]
}

function draw() {
  background(220);

  imagenActual.resize(width, height);
  image(imagenActual, 0, 0);

  dibujarCajaTexto();
  dibujarBotones();
}

function dibujarCajaTexto() {
  fill(0, 150);
  rect(20, 0, width - 40, 95);

  textSize(20);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont('Arial');

  let lineas = mensajes[indiceMensajeActual].split("\n");
  let alturaLinea = textAscent() + textDescent();

  for (let i = 0; i < lineas.length; i++) {
    let lineaY = (95 / 2) - (lineas.length * alturaLinea) / 2 + i * alturaLinea;
    text(lineas[i], width / 2, lineaY);
  }
}

function dibujarBotones() {
  let opciones = opcionesBotones[indiceMensajeActual];
  let anchoBoton = 120;
  let altoBoton = 50;
  let botonY = height - altoBoton - 20;

  for (let i = 0; i < opciones.length; i++) {
    let botonX = (width - (opciones.length * anchoBoton + (opciones.length - 1) * 20)) / 2 + i * (anchoBoton + 20);

    fill(139, 0, 0);
    rect(botonX, botonY, anchoBoton, altoBoton);

    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(opciones[i], botonX + anchoBoton / 2, botonY + altoBoton / 2);
  }
}

function mousePressed() {
  let opciones = opcionesBotones[indiceMensajeActual];
  let anchoBoton = 120;
  let altoBoton = 50;
  let botonY = height - altoBoton - 20;

  for (let i = 0; i < opciones.length; i++) {
    let botonX = (width - (opciones.length * anchoBoton + (opciones.length - 1) * 20)) / 2 + i * (anchoBoton + 20);

    if (mouseX > botonX && mouseX < botonX + anchoBoton && mouseY > botonY && mouseY < botonY + altoBoton) {
      manejarSeleccionOpcion(opciones[i]);
      break;
    }
  }
}

function manejarSeleccionOpcion(opcion) {
  switch (indiceMensajeActual) {
    case 2: // Cuando estás en la pantalla 3 (índice 2)
      if (opcion === "Apurarse") {
        indiceMensajeActual = 4; // "Apurarse" lleva a nt.5
      } else if (opcion === "Tomarse un momento") {
        indiceMensajeActual = 3; // "Tomarse un momento" lleva a nt.3
      }
      break;
    case 3: // Pantalla 4 (índice 3)
      indiceMensajeActual = 5; // Ir a la imagen 5 desde la pantalla 4
      break;
    case 4: // Pantalla 5 (índice 4)
      indiceMensajeActual = 5; // Ir a la imagen 5 desde la pantalla 5
      break;
    case 5: // Cuando estás en la pantalla "¿a donde vamos exactamente?" (índice 5)
      if (opcion === "Distraerse") {
        indiceMensajeActual = 6; // "Distraerse" lleva a la imagen nt.6 (índice 7)
      } else if (opcion === "Prestar atencion") {
        indiceMensajeActual = 7; // "Prestar atencion" lleva a la imagen nt.10 (índice 9)
      }
      break;
    case 6:
      indiceMensajeActual = 9; // Va de distraerse a nt.10
      break;
    case 7: 
      indiceMensajeActual = 8; // Va de prestar atención a nt.9
      break;
    case 8: 
      indiceMensajeActual = 12; // Cambia directamente a nt.13 al terminar la sesión de terapia
      break;
    case 9: 
      indiceMensajeActual = 12; // Va de perderse a elegir camino
      break;
    case 10:
    indiceMensajeActual = 0;
      break;
    case 11: // Pantalla final de reflexión
    if (opcion === "Siguiente") {
      indiceMensajeActual = 15;
      }// Debería ir a la imagen nt.11
    
    break;
    case 12: // Pantalla izquierda derecha"
      if (opcion === "derecha") {
        indiceMensajeActual = 10; // Ir a la imagen nt.11
      } else if (opcion === "izquierda") {
        indiceMensajeActual = 11; // Ir a la imagen nt.9
      }
      break;
    case 13: 
      break;
    case 14: 
      if (opcion === "Finalizar") {
        indiceMensajeActual = 11; // Cambiar a la pantalla con la imagen nt.12
      }
      break;
      
     case 15: 
      if (opcion === "Finalizar") {
        indiceMensajeActual = 0; // Cambiar a la pantalla con la imagen nt.12
      }
      break;
   
    default:
      if (indiceMensajeActual !== 5 && indiceMensajeActual !== 4) {
        indiceMensajeActual++; // Incrementa el índice solo si no es el caso 4 o 5
      }
      break;
  }

  if (indiceMensajeActual >= mensajes.length) {
    indiceMensajeActual = mensajes.length - 1; // Detener en la última pantalla sin reiniciar
  }

  imagenActual = imagenes[indiceMensajeActual]; // Actualiza la imagen
}
