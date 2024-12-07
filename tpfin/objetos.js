class ObjetoCayendo {
  constructor(velocidad) {
    this.x = random(width);
    this.y = 0;
    this.tamano = 20;
    this.velocidad = velocidad;
    this.tipo = random() > 0.7 ? 'rectangulo' : 'circulo';
  }

  mover() {
    this.y += this.velocidad;
  }

  mostrar() {
    if (this.tipo === 'circulo') {
      image(imgCirculo, this.x, this.y, this.tamano, this.tamano); 
    } else {
      image(imgCuadrado, this.x, this.y, this.tamano, this.tamano); 
    }
  }

  choca(jugador) {
    if (this.tipo === 'circulo') {
      return dist(this.x, this.y, jugador.x + jugador.tamano / 2, jugador.y) < this.tamano / 2 + jugador.tamano / 2;
    } else {
      return (
        this.x < jugador.x + jugador.tamano &&
        this.x + this.tamano > jugador.x &&
        this.y + this.tamano > jugador.y &&
        this.y < jugador.y + 10
      );
    }
  }

  fueraDePantalla() {
    return this.y > height;
  }
}
