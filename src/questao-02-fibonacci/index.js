import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    
    output: process.stdout
});

const verificaSequenciaFibonacci = (numeroProcurado) => {
    let numeroAnterior = 0;

    let numeroAtual = 1;

    if (numeroProcurado === numeroAnterior || numeroProcurado === numeroAtual) {
        return true;
    }

    let proximoNumero = numeroAnterior + numeroAtual;

    while (proximoNumero <= numeroProcurado) {
        if (proximoNumero === numeroProcurado) {
            return true;
        }

        numeroAnterior = numeroAtual;

        numeroAtual = proximoNumero;

        proximoNumero = numeroAnterior + numeroAtual;
    }

    return false;
};

rl.question('Digite um número para verificar na sequência de Fibonacci: ', (numero) => {
    const pertence = verificaSequenciaFibonacci(parseInt(numero, 10));

    console.log(`\n---\nO número ${numero} ${pertence ? "pertence" : "não pertence"} à sequência de Fibonacci.\n---`);
    
    rl.close();
});
