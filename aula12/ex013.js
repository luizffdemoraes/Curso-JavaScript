var agora = new Date();
var diaSem = agora.getDay();

/*
  0 = Domingo
  1 = Segunda
  2 = Terça
  3 = Quarta
  4 = Quinta
  5 = Sexta
  6 = Sábado
*/
console.log(diaSem);

switch (diaSem) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
  case 3:
    console.log("Quarta");
  case 4:
    console.log("Quinta");
  case 5:
    console.log("Sexta");
  case 6:
    console.log("Sabado");
  default:
    console.log("[ERRO] Dia inválido!");
}
