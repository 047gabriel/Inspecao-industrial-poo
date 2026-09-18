import { Inspecao } from "./Inspecao.js";

export class InspecaoFuncional extends Inspecao {
    funcaoTestada

    constructor(codigo, lote, quantidadeVerificada, funcaoTestada) {
        super(codigo, lote, quantidadeVerificada)
        this.funcaoTestada = funcaoTestada
    }

    descreverVerificacao() {
        return `
        Tipo: Acionamento
        Lote: ${this.lote}
        Função Testada: ${this.funcaoTestada}
        `
    }
}