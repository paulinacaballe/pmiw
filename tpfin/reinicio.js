class BotonReinicio {
  constructor(funcionReinicio) {
    this.boton = createButton('Reiniciar');
    this.boton.position(width / 2 - 40, height / 2 + 50);
    this.boton.hide();
    this.boton.mousePressed(funcionReinicio); 
  }

  mostrar() {
    this.boton.show();
  }

  esconder() {
    this.boton.hide();
  }
}
