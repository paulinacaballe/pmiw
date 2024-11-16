//https://youtu.be/fuF7PlrGguQ
let pantallas = []; 
let musica;
let tocarboton;
let i = 0;
let k = 0;
let txtbotones = ["Siguiente", "Desayunar", "Pasar", "Siguiente", "Siguiente", "Siguiente", "Finalizar", "Siguiente", "Siguiente", "Siguiente", "Siguiente", "Izquierda", "Derecha", "Siguiente", "Finalizar", "Siguiente", "Siguiente", "Finalizar"];
let dialogos = ["- ZzZzZzZz \n¡¡Se enciende la radio a todo volumen!!", //1
              "- Debo hacer arreglar esa radio\n¿Deberia quedarme a desayunar o paso de largo? ",//2
              "- Rigby: Al fin te levantas! Apurate que ya nos vamos a la excursion\n- Mordecai: Desayuno algo y estoy",//3
              "- Benson: Dale Mordecai apurate que ya es tarde!",//4
              "- Listo, vamos",//5
              "- 5 minutos despues - Mordecai no pudo ir a la excursion por haber\ndesayunado comida en mal estado.",//6
              "Mordecai, Rigby y Benson van en camino a la excursion\nescuchando musica a todo volumen ",//7
              "Benson: ¿Estan preparados chicos?\n- Mordecai y Rigby: ¡Porsupuesto!",//8
              "- Benson: ¡Al fin llegamos! ",//9
              "Mordecai decide alejarse de Benson y Rigby para poder explorar el bosque tranquilo.",//10
              "Encuentra dos caminos ¿Cual deberia seguir?",//11
              "Mordecai sigue el camino de la izquierda y se topa con un hombre ciervo,\nquien trata de matarlo, Mordecai huye sin mirar atras",//12
              "Luego de lograr escaparse del hombre ciervo se da cuenta que se ha perdido\nen lo profundo del bosque y no sabe como reguresar...",//13
              "Mordecai toma el camino de la derecha y encuentra a Rigby,\nquien ha encontrado un mapa perdido en el bosque.\n- Mordecai: ¡Deberiamos buscar a Benson y seguir el mapa!",//14
              "Juntos siguieron el mapa y encontraron una puerta escondida en unos arbustos",//15
              "¡La cual llevaba a un lugar magico!"];//16

dialogos[17] = "Fin";
dialogos[18] = "Créditos";
txtbotones[18] = "Reiniciar";
txtbotones[19] = "Ver créditos";

function preload() {
  // Cargar imágenes
  for (let j = 0; j < 19; j++) {
    pantallas[j] = loadImage(`data/imagen${j}.jpg`);
  }
  // Cargar archivo de sonido
  musica = loadSound('data/loop.mp3');
}

function setup() {
  createCanvas(640, 480);
  
  // Crear botón para reproducir música
  tocarboton = createButton('Reproducir Música');
  tocarboton.position(10, 80);
  tocarboton.mousePressed(tocarMusica);
}

function tocarMusica() {
  if (musica.isPlaying()) {
    musica.stop(); // Detener música si ya está sonando
  } else {
    musica.play(); // Reproducir música
  }
}


function draw() {
  // Mostrar la imagen que corresponde desde el arreglo 'pantallas'
  if (pantallas[i]) {
    image(pantallas[i], 0, 0, 640, 480);
  }
  
  textSize(12);

  if (i == 0 || (i > 1 && i < 10) || (i > 10 && i < 16)) {
    fill(0);
    rect(30, 20, 570, 50);
    fill(255);
    text(dialogos[i], 43, 40);
    rect(220, 440, 150, 30);
    fill(0);
    textSize(17);
    text(txtbotones[k], 260, 460);
  }

  if (i == 1 || i == 17 || i == 10) {
    fill(0);
    rect(30, 20, 570, 50);
    fill(255);
    text(dialogos[i], 43, 40);
    rect(50, 440, 150, 30);
    rect(420, 440, 150, 30);
    fill(0);
    textSize(17);
    text(txtbotones[k], 110, 460);
    text(txtbotones[k + 1], 490, 460);
  }

  if (i == 18) {
    fill(255);
    textSize(30);
    text("Paulina Caballe 120284/7 \n Sebastian Ibarra 120321/3", 200, 200);
    fill(255);
    rect(220, 440, 150, 30);
    fill(0);
    textSize(15);
    text("Reiniciar", 260, 460);
  }
}

function mousePressed() {
  if (mouseX > 220 && mouseX < 370 && mouseY > 440 && mouseY < 470 && 
      (i == 0 || (i > 1 && i < 10) || (i > 10 && i < 19))) {
    if (i == 18) {
      i = 0;
      k = 0;
    } else {
      i++;
      k++;
    }
    if (i == 6 || i == 13 || i == 16) {
      i = 17;
      k = 18;
    }
  }

  if (mouseX > 50 && mouseX < 200 && mouseY > 440 && mouseY < 470 && 
      (i == 1 || i == 10 || i == 17)) {
    i++;
    k += 2;
    if (i >= 17) {
      i = 0;
      k = 0;
    }
  }

  if (mouseX > 420 && mouseX < 570 && mouseY > 440 && mouseY < 470 && 
      (i == 1 || i == 10 || i == 17)) {
    if (i == 1) {
      i = 6;
      k = 7;
    } else if (i == 10) {
      i = 13;
      k = 15;
    } else if (i == 17) {
      i++;
    }
  }
}
