const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,

];
 
function primo(arreglonum){
  var lonarreglo = arreglonum.length;
  for (var indice = 0; indice < lonarreglo; indice++){
    var valor = arreglonum[indice];
    var esPrimo = true;
    for (var inicio = 1; inicio < valor; inicio++){
      if (valor % inicio == 0 && inicio != 1){
        esPrimo = false;
        break;
      }
    }
    if (esPrimo == true) {
      console.log(valor);
    }
  }
}

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

const ejercicio3
