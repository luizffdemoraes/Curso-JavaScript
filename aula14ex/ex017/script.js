function tabuada() {
  var num = document.getElementById("numero");
  var res = document.getElementById("res");
  var c = 0;
  //for (let c = 0; c <= 10; c++)
  if (num.value.length == 0) {
    alert("Por favor, digite um número!");
  } else {
    res.innerHTML = "";
    while (c <= 10) {
      let r = Number(num.value) * c;
      //alert(`${num.value} * ${c} = ${r}`);
      res.innerHTML += `${num.value} * ${c} = ${r} \n`;
      c++;
    }
  }
}
/*
Correção Guanabara
function tabuada(){
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if (num.value.length == 0) {
    alert("Por favor, digite um número!");
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }
}

*/
