import { Inspecao } from "./inspecao.js"

export class InspecaoDimensional extends Inspecao {
    medidaConferida

    constructor(codigo, lote, quantidadeVerificada, medidaConferida) {
        super(codigo, lote, quantidadeVerificada)
        this.medidaConferida = medidaConferida
    }

    descreverVerificacao() {
        return `
        Tipo: Diâmetro
        Lote: ${this.lote}
        Medida Conferida: ${this.medidaConferida}
        `
    }
}