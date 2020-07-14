var inicio = document.getElementById("inicio");
var fim = document.getElementById("fim");
var passo = document.getElementById("passo");
var res = document.getElementById("res");

function contar() {
  if (inicio.value == "" || fim.value == "" || passo.value == "") {
    alert("[ERRO] Por favor, preencha os campos");
  } else {
    alert("Tudo OK.");
    res.innerHTML = "Contando: <br>";
    let i = Number(inicio.value);
    let p = Number(passo.value);
    let f = Number(fim.value);

    if (p <= 0) {
      alert("Passo inválido! Considerando PASSO 1");
      p = 1;
    }
    if (i < f) {
      // Contagem Crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F47E} `;
      }
    } else {
      // Contagem Regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F47E} `;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}

/*
Correção Guanabara

function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0  || passo.value.length == 0 ) {
    res.innerHTML = 'Impossivel contar!' 
    //window.alert("[ERRO] Faltam dados!");
    
  } else {
    res.innerHTML = "Contando: <br> ";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if(p <= 0){
      window.alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }
    if (i < f){
      // Contagem crescente
       for (let c = i; c <= f; c += p) {
         res.innerHTML += `${c} \u{1F47E} `;
      }
    } else {
      // Contagem regressiva
      for(let c = i; c >= f; c -= p){
         res.innerHT += `${c} \u{1F47E}`;
      }
    }
    res.innerHTML += `${c} \u{1F3c1} `;
  }
}
*/
