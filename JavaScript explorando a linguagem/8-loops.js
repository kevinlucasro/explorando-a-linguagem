console.log(`\nTrabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = 'Espitito Santo';

console.log('\nDestinos Possiveis:');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log('Destino existe: ', destinoExiste);

if (podeComprar && destinoExiste) {
    console.log('Boa Viagem');
} else {
    console.log('Desculpe tivemos um erro!');
}

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}