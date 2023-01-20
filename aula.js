/*VARIAVÉS

# const => não muda. Toda vez que crio uma variável com const eu não posso atribuir um novo valor.

 # let => pode mudar. Posso alterar o valor quantas vezes precisar.

# IF (SE) /ELSE (SE NÃO) => Ajuda nosso código a tomar decisões.

# Funções => trecho de código que só funciona se for chamado

Laços -  FOR [array ou matriz]
*/ 

/*
EXEMPLO DE IF E ELSE
let number = 20

if(number > 12){
    console.log ('O número é maior que 12')

} else {
    console.log('O número NÃO é maior que 12 ')
}*/


// função //
/* 
let number = 30
 console.log ('Hello there')

 function like (){
    console.log('Revisando conhecimentos')
    console.log('Jesus me ajude')
 }
  // chamando a função //

  like()  */

// EXEMPLOS DE FOR, ARRAY

  let produtos = ['blusa', 'tenis Nike', 'camiseta', 'meia,', 'shorts']

  produtos.forEach( itens => {
    if(itens === 'blusa'){
        console.log(itens)
    } else {
        console.log('Não é blusa')
    }
   

  })