/*only cars*/
let impimircoche=(vehiculo)=>{
    console.log(
        `Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Puertas: ${
          vehiculo.puertas
        } // Precio: ${vehiculo.changePrice()}`
      );
};

/*only motorcycle */
let imprimirMoto=(vehiculo)=>{
    console.log(
        `Marca: ${vehiculo.marca} // Modelo: ${
          vehiculo.modelo
        } // Cilindrada: ${
          vehiculo.cilindrada
        } // Precio: ${vehiculo.changePrice()}`
      );
};

/*expensive cars*/
let expCar=(vehiculos)=>{
    var vehiculosCaros = vehiculos.sort((a, b) => b.precio - a.precio);
        console.log(
            `Vehículo más caro: ${vehiculosCaros[0].marca} ${vehiculosCaros[0].modelo}`
        );
};

/*cheap cars*/
let cheapCar=(vehiculos)=>{
    var vehiculosCaros = vehiculos.sort((a, b) => b.precio - a.precio);
        console.log(
            `Vehículo más barato: ${vehiculosCaros[vehiculosCaros.length - 1].marca} ${
            vehiculosCaros[vehiculosCaros.length - 1].modelo
            }`
        );
};

/* model with letter 'Y'*/
let withY=(vehiculos)=>{
    var searchByY = vehiculos.filter((vehiculo) => {
        return vehiculo.modelo.includes("Y");
      });
      console.log(
        `Vehículo que contiene en el modelo la letra 'Y': ${searchByY[0].marca} ${
          searchByY[0].modelo
        } ${searchByY[0].changePrice()}`
      );
};

/*price list */
let priceOrder=(vehiculos)=>{
    var vehiculosCaros = vehiculos.sort((a, b) => b.precio - a.precio);
        console.log("Vehículos ordenados por precio de mayor a menor:");
        vehiculosCaros.forEach((vehiculo) => {
        console.log(`${vehiculo.marca} ${vehiculo.modelo}`);
        });
};

  exports.module={
    impimircoche,
    imprimirMoto,
    expCar,
    cheapCar,
    withY,
    priceOrder
  }