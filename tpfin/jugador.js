class Jugador {
  constructor() {
    this.x = width / 2;
    this.y = height - 20;
    this.tamano = 100;
    this.velocidad = 10;
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad;
    }

    if (this.x > width) {
      this.x = -this.tamano;
    } else if (this.x + this.tamano < 0) {
      this.x = width;
    }
  }

  mostrar() {
    image(imgJugador, this.x, this.y, this.tamano, 10); 
  }
}
