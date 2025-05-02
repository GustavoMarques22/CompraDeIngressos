/*Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.*/

function converterParaInteiro(valorString) {
    return parseInt(valorString);
}

// Exemplo de uso
let valorString = "42";
let valorInteiro = converterParaInteiro(valorString);
console.log(valorInteiro);  // Saída esperada: 42
