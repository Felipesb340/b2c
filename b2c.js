function calc() {
  var n1 = window.document.getElementById("n1").value
  var res = window.document.getElementById("res")

  if (n1.length <= 8){
    var len = n1.length
    var cont = 0
    var elevado = 0
    var arm = 0
    let coef = (len - cont - 1)

    
    if (n1[coef] == 1 || n1[coef] == 0 ){
      while (cont < len) {
        coef = (len - cont - 1)
        elevado = Math.pow(2,cont)
        arm += ((n1[coef]) * elevado)
        cont++
      }
      res.innerHTML += `<p> A versão decimal de <strong>${n1}</strong> é igual <strong>${arm}</strong></p>`
    }else {
      res.innerHTML += `<p> Digite um numero binário, apenas 0 ou 1.</strong></p>`
    }
    
    
  } else {
    res.innerHTML += `<p>Digite um número com até 8 dígitos</p>`
  }


  
}

function limpar() {
  res.innerHTML = null
}