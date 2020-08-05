module.exports= class Vehiculo {
    constructor(marca, modelo, precio) {
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
    }

    /* change '.' => ',' */
    changePrice() {
        var parts = this.precio.toFixed(2).toString().split(".");
        var result = parts[0].replace(/\B(?=(\d{3})+(?=$))/g, ".") + (parts[1] ? "," + parts[1] : "");
        return `$${result}`;
      }
}