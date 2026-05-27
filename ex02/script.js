const aleatorios = new Array(7);
for (let i = 0; i < 7; i++) {
    
    aleatorios[i] = Math.floor(Math.random() * 100) + 1;
}
console.log("Valores gerados aleatoriamente:");
for (let i = 0; i < 7; i++) {
    console.log(`Posição [${i}]: ${aleatorios[i]}`);
}