// --- Testes ---
// 1 - Crie pelo menos dois inspetores e uma inspeção de cada tipo com new.
// 2 - Atribua inspetores às três inspeções; use o mesmo inspetor em pelo menos duas delas.
// 3 - Teste adicionarPecas() com um valor positivo e depois com 0; mostre a quantidade após cada tentativa.
// 4 - Coloque as três inspeções no mesmo array inspecoes.
// 5 - Use um for tradicional para exibir código, lote, quantidade verificada, nome e matrícula do inspetor e o resultado de descreverVerificacao() de cada objeto.

import { Inspetor } from "./model/Inspetor.js";
import { InspecaoDimensional } from "./model/InspecaoDimensional.js";
import { InspecaoFuncional } from "./model/InspecaoFuncional.js";
import { InspecaoVisual } from "./model/InspecaoVisual.js";

const inspetor1 = new Inspetor('Leo Dias', '157');
const inspetor2 = new Inspetor('Dj Petroski', '171');

const inspecao1 = new InspecaoDimensional('001', 'A1', 10, 5.5);
const inspecao2 = new InspecaoVisual('002', 'B2', 20, 'OK');
const inspecao3 = new InspecaoFuncional('003', 'C3', 15, 'Motor ligado');

inspecao1.atribuirInspetor(inspetor1);
inspecao2.atribuirInspetor(inspetor1);
inspecao3.atribuirInspetor(inspetor2);

console.log('Teste adicionarPecas(10):');
console.log(inspecao1.adicionarPecas(10));
console.log(`Quantidade após adicionar 10 peças: ${inspecao1.quantidade}`);

console.log('Teste adicionarPecas(0):');
console.log(inspecao1.adicionarPecas(0));
console.log(`Quantidade após tentar adicionar 0 peças: ${inspecao1.quantidade}`);

const inspecoes = [inspecao1, inspecao2, inspecao3];

console.log('\nRelatório das inspeções:');
for (let i = 0; i < inspecoes.length; i++) {
    const inspecao = inspecoes[i];
    console.log(`\nCódigo: ${inspecao.codigo}`);
    console.log(`Lote: ${inspecao.lote}`);
    console.log(`Quantidade verificada: ${inspecao.quantidade}`);
    console.log(`Inspetor: ${inspecao.inspetor.nome} - Matrícula: ${inspecao.inspetor.matricula}`);
    console.log(`Descrição: ${inspecao.descreverVerificacao()}`);
}