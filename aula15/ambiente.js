let num = [5, 8, 2, 9, 3];
num.push(1); //adicionar valor
num.sort(); // Ordenar valores do vetor
console.log(`${num}`); // Exibir
console.log(`O vetor tem ${num.length} posições`); //Verificar a quantidade de posições
console.log(`O primeiro valor do vetor é ${num[1]}`);
let pos = num.indexOf(4);

if (pos == -1) {
  console.log(`O valor não foi encontrado!`);
} else {
  console.log(`O valor está na posição ${pos}`);
}
