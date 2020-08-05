const Vehiculo=require('./Vehiculo');

module.exports=class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada, precio) {
      super(marca, modelo, precio);
      this.cilindrada = cilindrada;
    }
    fomatCilindrada() {
      return `${this.cilindrada}c`;
    }
}
// module.exports.Moto