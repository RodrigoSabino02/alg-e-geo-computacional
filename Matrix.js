class Matrix {
    constructor(rows, cols, elements) {
        this.rows = rows
        this.cols = cols
        this.elements = elements

        if(rows == undefined || cols == undefined){
            throw new Error("A quantidade de linha e colunas deve ser informada")
        }

        if(rows < 0){
            throw new Error("a quantidade de linhas deve ser maior que 0")
        }

        if(cols < 0){
            throw new Error("a quantidade de colunas deve ser maior que 0")
        }

        if(elements == undefined){
            this.elements = []
            while(this.elements.length != rows * cols){
                this.elements.push(0)
            }
        } else {
            if(elements.length != rows * cols ){
                throw new Error("a quantidade de elementos e incompativel com a matrix")
            }
        }
    }

    get(i,j) {

        this.#validateElementIndex(i, j)

        return this.elements[this.#getIndex(i, j)]
    }

    set(i,j, value) {
        this.#validateElementIndex(i, j)

        this.elements[this.#getIndex(i, j)] = value
    }

    #getIndex(i, j){
        return (j - 1) + (i - 1) * this.cols
    }

    #validateElementIndex(i, j) {
        if(i <= 0 || i> this.rows){
            throw new Error(`O indice i deve estar entre 1 e ${this.rows}`)
        }
    
        if(j <= 0 || j> this.cols){
            throw new Error(`O indice i deve estar entre 1 e ${this.cols}`)
        }
    }
}

