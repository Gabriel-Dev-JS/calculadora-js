console.log("hello world!")

function logica(tipo, valor){
   if(tipo == 'valor'){
    document.getElementById('text').value += valor
   }

  if(tipo == 'acao'){
    if (valor == 'c'){
      document.getElementById('text').value = ""
    }

    if(valor == '/' || valor == '+' || valor == '-' || valor == '*'){
      document.getElementById('text').value += valor
    }

    if(valor == '='){

    var input = eval(document.getElementById('text').value)

    document.getElementById('text').value = input
      
    }
    
  }
}


