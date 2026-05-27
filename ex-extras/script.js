let contagemregressiva = " ";
let numeroDivisivelPor4 = [];

//loop para a contagem regressiva
for (let numero = 30; numero >= 1; numero--) {
    if (numero % 4 === 0) {

        contagemregressiva += (`[${numero}] `);
    } else {
        contagemregressiva += `${numero} `;
    }

}

alert(contagemregressiva); 


