import { Inspecao } from "./Inspecao.js";

export class InspecaoVisual extends Inspecao {
    aspectoObservado

    constructor(codigo, lote, quantidadeVerificada, aspectoObservado) {
        super(codigo, lote, quantidadeVerificada)
        this.aspectoObservado = aspectoObservado
    }

    descreverVerificacao() {
        return `
        Tipo de inspeção: Acabamento
        Lote: ${this.lote}
        Aspecto Observado: ${this.aspectoObservado}`
    }
}