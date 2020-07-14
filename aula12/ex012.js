var agora = new Date(); //Busca data e hora do sistema
var hora = agora.getHours(); //Separa hora da variavel
console.log(`Agora são exatamente ${hora} horas.`);
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora <= 18) {
  console.log("Boa tarde!");
} else if (hora <= 24) {
  console.log("Boa noite!");
} else {
  console.log("Boa madrugada!");
}
