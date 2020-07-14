var valores = [];
var num = document.getElementById("numero");
var list = document.getElementById("lista");
var res = document.querySelector("div#res");

// Verificar Número
function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
// Verificar número dentro da Lista
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function Adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value)); // Adicionar valor em um vetor
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`; // Inserir testo na variável
    list.appendChild(item); // Exibir na tela o valor
    // validação alert(valores);
  } else {
    alert(`Valor inválido ou ja encontrado na lista.`);
  }
  num.value = ""; //Zerar o campos após executar o botão
  num.focus(); //dar enfase a caixa input de númerica
}

function Finalizar() {
  if (valores.length == 0) {
    alert("Adicione valores antes de finalizar!");
  } else {
    let tot = valores.length; //Quantidades de valores no vetor
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos]; // somar
      //Verificar o menor e maior valor
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }
    media = soma / tot;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`;
  }
}

/*
Correção

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let num = document.querySelector('input#fnum')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function Adicionar() {
  if (isNumero(num.value) && !inLista(num.value, list)) {
    valores.push(Number(num.value)); // Adicionar valor em um vetor
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`; // Inserir testo na variável item
    list.appendChild(item); // Exibir na tela o valor
  } else {
    alert(`Valor inválido ou ja encontrado na lista.`);
  }
}
*/
