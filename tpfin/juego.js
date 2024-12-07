class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.objetos = [];
    this.puntuacion = 0;
    this.circulosAtrapados = 0;
    this.circulosFallidos = 0;
    this.cuadradosAtrapados = 0;
    this.velocidadCaida = 4;
    this.estadoPantalla = 'instrucciones'; 
  }

  dibujar() {
    if (this.estadoPantalla === 'instrucciones') {
      this.mostrarInstrucciones();
    } else if (this.estadoPantalla === 'juego') {
      this.mostrarJuego();
    } else if (this.estadoPantalla === 'final') {
      this.mostrarPantallaFinal();
    }
  }

  mostrarInstrucciones() {
    background(0);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Instrucciones", width / 2, height / 4);
    text("Creditos", width / 2, height / 1.5);
    textSize(18);
    text("1. Mueve el jugador usando las flechas izquierda y derecha.", width / 2, height / 3);
    text("2. Atrapa los círculos azules para ganar puntos.", width / 2, height / 2.5);
    text("3. Si atrapas 3 cuadrados rojos, pierdes.", width / 2, height / 2.1);
    text("4. Atrapa al menos el 80% de los círculos para ganar.", width / 2, height / 1.8);
    text("Paulina Caballe 120284/7 - Sebastian Ibarra 120321/3", width / 2, height / 1.3);
    text("Presiona cualquier tecla o clic en la pantalla para empezar.", width / 2, height - 50);
  }

  mostrarJuego() {
    background(0);
    fill(255);
    textSize(18);
    text("Puntuación: " + this.puntuacion, 10, 20);
    text("Círculos atrapados: " + this.circulosAtrapados + "/" + totalCirculos, 10, 40);
    text("Cuadrados atrapados: " + this.cuadradosAtrapados, 10, 60);

    
    this.jugador.mover();
    this.jugador.mostrar();

    
    if (frameCount % 60 === 0) {
      this.objetos.push(new ObjetoCayendo(this.velocidadCaida));
    }

    
    for (let i = this.objetos.length - 1; i >= 0; i--) {
      this.objetos[i].mover();
      this.objetos[i].mostrar();

      
      if (this.objetos[i].choca(this.jugador)) {
        if (this.objetos[i].tipo === 'circulo') {
          this.puntuacion++;
          this.circulosAtrapados++;
          this.velocidadCaida += 0.5;
        } else if (this.objetos[i].tipo === 'rectangulo') {
          this.cuadradosAtrapados++;
        }
        this.objetos.splice(i, 1);
      } else if (this.objetos[i].fueraDePantalla()) {
        if (this.objetos[i].tipo === 'circulo') {
          this.circulosFallidos++;
        }
        this.objetos.splice(i, 1);
      }
    }

    
    if (this.circulosAtrapados + this.circulosFallidos >= totalCirculos) {
      if (this.circulosAtrapados / totalCirculos >= porcentajeMinimo) {
        this.terminarJuego("¡Ganaste!");
      } else {
        this.terminarJuego("Perdiste: No atrapaste el 80% de los círculos");
      }
    }

    
    if (this.cuadradosAtrapados >= 3) {
      this.terminarJuego("¡Perdiste! Atrapaste 3 cuadrados");
    }
  }

  mostrarPantallaFinal() {
    background(0);
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER);
    text("Juego Terminado", width / 2, height / 2 - 40);
    textSize(24);
    text("Presiona el botón para reiniciar", width / 2, height / 2);

    // Mostrar reinicio en la pantalla final
    botonReinicio.mostrar();
  }

  terminarJuego(mensaje) {
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER);
    text(mensaje, width / 2, height / 2);
    noLoop();
    this.estadoPantalla = 'final'; 
    botonReinicio.mostrar();
  }

  reiniciarJuego() {
    this.puntuacion = 0;
    this.circulosAtrapados = 0;
    this.circulosFallidos = 0;
    this.cuadradosAtrapados = 0;
    this.velocidadCaida = 4;
    this.objetos = [];
    loop();
    this.estadoPantalla = 'instrucciones'; 
    botonReinicio.esconder(); 
  }
}

function keyPressed() {
  if (juego.estadoPantalla === 'instrucciones') {
    juego.estadoPantalla = 'juego'; 
  }
}

function mousePressed() {
  if (juego.estadoPantalla === 'instrucciones') {
    juego.estadoPantalla = 'juego'; 
  }
}
