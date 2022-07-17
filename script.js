//1 - crie uma função que exiba uma mensagem no console

function msg(){
    console.log('Mensagem exibida com sucesso!')
  }
  
  msg()
  
  //2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console{
  
  function namer(nome){
    console.log(nome)
  }
  
  namer("Amilton")
  
  //3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
  
  function about(nome, idade, musical){
    console.log(`Me chamo ${nome}, tenho ${idade} anos e meu estilo musical favorito é ${musical}!`)
  }
  
  about("amilton", 25, "pop")
  
  //4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
  
  function art(filme, musica){
    console.log(`Ultimo filme que assisti foi ${filme} e amo a musica ${musica}`)
  }
  
  art("pedagio", "body")
  
  //5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
  
  function triple(tres){
    return(console.log(tres*3))
  }
  
  triple(5)