const Moto=require('../models/Moto');
const Auto=require('../models/Auto');
const imprimir=require('../console/out')

const getList = (vehiculosArray) => {
    var vehiculos = [];
    vehiculosArray.map((vehiculo) => {
    vehiculo.puertas? vehiculos.push(new Auto(vehiculo.marca,vehiculo.modelo,vehiculo.puertas,vehiculo.precio))
                    :vehiculos.push(new Moto(vehiculo.marca,vehiculo.modelo,vehiculo.cilindrada,vehiculo.precio));
    });
    vehiculos.map((vehiculo) => {
        vehiculo.puertas?imprimir.module.impimircoche(vehiculo)
        :imprimir.module.imprimirMoto(vehiculo)
    });
    console.log("=============================");
    /*exp car*/
        imprimir.module.expCar(vehiculos);
    /*cheap car*/
        imprimir.module.cheapCar(vehiculos);
    /*with letter: 'Y'*/
    imprimir.module.withY(vehiculos);
    console.log("=============================");
   //by price
    imprimir.module.priceOrder(vehiculos);
  };
  exports.module={
      getList,

  }