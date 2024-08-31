//https://youtu.be/tGnR3UDsFOA

let img;
let colores;  // Inicializamos el array sin valores.
let colorIndex = 0;
let invertirColores = false;

// guardar original
let colorIndexOriginal;
let invertirColoresOriginal;

function preload() {
  img = loadImage("data/tp3.jpg");
}

function setup() {
  createCanvas(800, 400);
  noLoop();

  // Iniciar colores dentro de setup.
  colores = [color(0, 0, 255), color(0, 255, 0), color(255, 0, 0), color(255, 255, 0)];

  // Iniciar estado original
  colorIndexOriginal = colorIndex;
  invertirColoresOriginal = invertirColores;
}

function drawShape(x, y, size, colorIndex, invert) {
  if (invert) {
    fill(colores[colorIndex]);
  } else {
    fill(0);
  }
  rect(x, y, size, size);

  if (invert) {
    fill(0);
  } else {
    fill(colores[colorIndex]);
  }
  ellipse(x + size / 2, y + size / 2, size, size);
}

function shouldInvert(i, j) {
  return (i + j) % 2 == 0;
}

function draw() {
  image(img, 0, 0, 400, 400);
  let rows = 3;  // filas
  let cols = 3;  // columnas
  let cellSize = height / rows;  // tamaño de cada uno

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let invert = shouldInvert(i, j) ? invertirColores : !invertirColores;
      drawShape(400 + i * cellSize, j * cellSize, cellSize, colorIndex, invert);  // Desplazar el dibujo a la derecha
    }
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    // volver a original
    colorIndex = colorIndexOriginal;
    invertirColores = invertirColoresOriginal;
  } else {
    colorIndex = int(random(colores.length));
  }
  redraw();
}

function mousePressed() {
  invertirColores = !invertirColores;
  redraw();
}
