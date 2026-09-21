// --- Testes ---
/*
1 - Crie pelo menos dois inspetores e uma inspeção de cada tipo com new.
2 - Atribua inspetores às três inspeções; use o mesmo inspetor em pelo menos duas delas.
3 - Teste adicionarPecas() com um valor positivo e depois com 0; mostre a quantidade após cada tentativa.
4 - Coloque as três inspeções no mesmo array inspecoes.
5 - Use um for tradicional para exibir código, lote, quantidade verificada, nome e matrícula do inspetor e o resultado de descreverVerificacao() de cada objeto.*/

// import { Inspecao } from "./model/inspecao.js";
import { Inspetor } from "./model/inspetor.js";
import { InspecaoVisual } from "./model/InspecaoVisual.js";
// import { InspecaoFuncional } from "./model/InspecaoDimensional.js";
import { InspecaoDimensional } from "./model/InspecaoDimensional.js";

const inspetor1 = new Inspetor('Leo Dias', '157')
const inspetor2 = new Inspetor('Dj Petroski', '171')

const inspecao1 = new InspecaoDimensional('001', 'A1', 10, 5.5);
const inspecao2 = new InspecaoVisual('002', 'B2', 20, 'OK');

inspecao1.atribuirInspetor(inspetor1);
inspecao2.atribuirInspetor(inspetor1);

inspecao1.adicionarPecas(10);
console.log(`Quantidade após adicionar peças: ${inspecao1.quantidade}`);

inspecao1.adicionarPecas(0);
console.log(`Quantidade após tentar adicionar 0 peças: ${inspecao1.quantidade}`);