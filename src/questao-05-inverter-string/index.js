import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inverteString = (stringParaInverter) => {
    let stringInvertida = '';

    for (let i = stringParaInverter.length - 1; i >= 0; i--) {
        stringInvertida += stringParaInverter[i];
    }

    return stringInvertida;
};

rl.question('Digite uma string para inverter: ', (stringParaInverter) => {
    const resultado = inverteString(stringParaInverter);

    console.log(`\n---\nString Original: ${stringParaInverter}\n\nString Invertida: ${resultado}\n---`);

    rl.close();
});
