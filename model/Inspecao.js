export class Inspecao {
    codigo
    lote
    #quantidadeVerificada

    constuctor(codigo, lote, quantidadeVerificada) {
        this.codigo = codigo
        this.lote = lote
        this.#quantidadeVerificada = quantidadeVerificada
    }

    get quantidade() {
        if(quantidade > 0) {
            return this.#quantidadeVerificada

        } else {
            throw new Error(`Quantidade atual indisponível: ${this.#quantidadeVerificada}`)
        }
    }

    adicionarPecas(quantidade) {
        if(quantidade > 0) {
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