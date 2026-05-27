const numeros = new Array(10);
let somaPares = 0;
for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
}
for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];
    }
}
alert("Vetor preenchido:", numeros);
alert("A soma dos números pares é:", somaPares);