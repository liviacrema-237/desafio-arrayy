let inicio = parseInt(prompt("Digite o primeiro valor"));
let fim = parseInt(prompt("Digite o ultimo valor"));
let incremento = parseInt(prompt("Digite o incremento"));
let contagem = "Contagem: ";

for(let i = inicio; i <= fim; i += incremento) {
    contagem += `${i}, `;
    // Contagem: 3, 5, 7, 9, Acabou!
}

contagem += "Acabou!";

alert(contagem);

//Validção para evitar incremento 0
// if (incremento <=0 ) {
// alert("O incremento deve ser maior que zero!");
// } else {
    
    
//     //estrutura de repetição
    
// }