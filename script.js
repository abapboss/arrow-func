function arrowFunc() {
    let numeros = [1, 2, 3, 4, 5]
    const palavras = ["Rato", "Roeu", "A", "Roupa", "Do", "Rei", "De", "Roma"]

    
    // 1
    // Array.forEach permite a gente executar uma funcao para cada elemento no array
    // nesse caso estamos realizando a multiplicacao de cada numero na array por 2
    // (precisamos passar o elemento direto na array por array[index] se nao ele nao sobrepoe o elemento
    // na array apenas utilizando o element)
    const dobrarNumero = (numero) => numero * 2;
    numeros.forEach((numero, index) => numeros[index] = dobrarNumero(numero));
    console.log(numeros)
    // Resultado : [ 2, 4, 6, 8, 10 ]

    // 2
    // Array.sort nos permite a executar uma condicao pra ordenacao da nossa Array
    // podemos extrair o primeiro elemento e o segundo elemento pra utilizar na nossa funcao
    // nesse caso comparamos o tamanho do primeiro elemento com o do segundo
    // fazendo entao uma ordenacao crescente, pra realizar a decrescente basta inverter a subtracao
    const ordenarCrescente = (a, b) => a.length - b.length;
    palavras.sort((primeiraPalavra, segundaPalavra) => ordenarCrescente(primeiraPalavra, segundaPalavra));
    console.log(palavras)
    // Resultado : [ "A", "Do", "De", "Rei", "Rato", "Roeu", "Roma", "Roupa" ]

    // 3
    // Array.filter nos permite a executar uma funcao que retorna um booleano se aquele elemento
    // deveria estar ali ou nao, nesse caso se o resto da divisao por 2 for igual a zero isso quer dizer 
    // que isso ele é par, lembrando que o == realiza uma expressao booleana que retorna true ou false.
    // Devemos sobrepor a array com o que o metodo retorna porque ele nao deleta da array por si so
    numeros = [1, 2, 3, 4, 5]
    const éPar = (num) => num % 2 == 0;
    numeros = numeros.filter((numero) => éPar(numero));
    console.log(numeros)
    // Resultado : [ 2, 4 ]

}

arrowFunc()