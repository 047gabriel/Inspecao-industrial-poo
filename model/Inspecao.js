export class Inspecao {
    codigo
    lote
    #quantidadeVerificada

    constructor(codigo, lote, quantidadeVerificada) {
        this.codigo = codigo
        this.lote = lote
        this.#quantidadeVerificada = quantidadeVerificada
    }

    get quantidade() {
        return this.#quantidadeVerificada
    }

    adicionarPecas(quantidade) {
        if (quantidade > 0) {
            this.#quantidadeVerificada += quantidade
            return true
        } else {
            return false
        }
    }

    descreverVerificacao() {
        throw new Error('O método descreverVerificacao() deve ser implementado pelas classes filhas.')
    }

    atribuirInspetor(inspetor) {
        this.inspetor = inspetor
    }
}