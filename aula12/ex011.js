var idade = 67;
console.log(`Você tem ${idade} anos.`);
if (idade < 18) {
  console.log(`Não Vota`);
} else if (idade < 18 || idade > 65) {
  // idade >= 16 && idade < 18
  console.log(`Voto opcional`);
} else {
  //idade >= 18
  console.log(`Voto obrigatório`);
}
