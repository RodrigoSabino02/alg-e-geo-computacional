class LinearAlgebra {
    transpose(a){
        let c

        if (a instanceof Matrix) {
            c = new Matrix(a.cols, a.rows)

            for(let i = 1; i <= c.rows; i++){
                for(let j; j <= c.cols; j++){
                    c.set(i, j, a.get(j, i))
                }
            }
        } else if(a instanceof Vector){
            c = new Vector(a.rows)
            c.rows = a.cows
            c.cols = a.rows

            for(let i = 1; i <= c.rows; i++){
                c.get(i, a.get(i))
            }

        } else {
            throw new Error("O parametro da funçao transpose deve ser um objeto da class Matrix ou Vector")
        }

        return c
    }

    sum(a, b){

        let c

        if (!(a instanceof Matrix) || !(b instanceof Matrix)) {
            throw new Error("os parametros devem ser objetos da classe Vector ou matrix")
        }

        if (a.rows != b.rows || b.cols != b.rows) {
            throw new Error("Os parametros nao possuem a msm dimençao")
        }

        if (a instanceof Vector && b instanceof Vector) {
            c = new Vector(a.dim)
            c.rows = a.rows
            c.cols = a.cols

            for(let i = 1; i <= a.dim; i++){
                c.set(i, a.get(i) + b.get(i))
            }
            
        } else if (a instanceof Matrix && b instanceof Matrix) {

            c = new Matrix(a.rows, a.cols)

            for(let i = 1; i <= a.rows; i++){
                for(let j = 1; j <= a.cols; j++){
                    c.set(i, j, a.get(i,j,) + b.get(i,j))
                }
            }
        }

        return c
    }

    times(a, b){
        let c

        if (typeof(a) == "number") {
            if (!(b instanceof Matrix)) {
                throw new Error("o parametro b deve ser objetos da classe Vector ou matrix")
            }

            if(b instanceof Vector){
                c = new Vector(b.dim)

                c.rows = b.rows
                c.cols = b.cols

                for(let i = 1; i <= b.dim; i++){
                    c.set(i, a * b.get(i))
                }
            } else if(b instanceof Matrix) {
                c = new Matrix(b.rows, b.cols)
    
                for(let i = 1; i <= b.rows; i++){
                    for(let j = 1; j <= b.cols; j++){
                        c.set(i, j, a * b.get(i,j))
                    }
                }
            }
            
        } else {
            if (!(a instanceof Matrix) || !(b instanceof Matrix)) {
                throw new Error("os parametros devem ser objetos da classe Vector ou matrix")
            }
    
            if (a.rows != b.rows || b.cols != b.rows) {
                throw new Error("Os parametros nao possuem a msm dimençao")
            }
    
            if (a instanceof Vector && b instanceof Vector) {
                c = new Vector(a.dim)

                c.rows = a.rows
                c.cols = a.cols
    
                for(let i = 1; i <= a.dim; i++){
                    c.set(i, a.get(i) * b.get(i))
                }
                
            } else if (a instanceof Matrix && b instanceof Matrix) {
    
                c = new Matrix(a.rows, a.cols)
    
                for(let i = 1; i <= a.rows; i++){
                    for(let j = 1; j <= a.cols; j++){
                        c.set(i, j, a.get(i, j) * b.get(i, j))
                    }
                }
            }
        }

       

        return c
    }

    dot(a, b){
        if (!(a instanceof Matrix) || !(b instanceof Matrix)) {
            throw new Error("os parametros devem ser objetos da classe Vector ou matrix")
        }

        if (a.cols != b.rows) {
            throw new Error("Os parametros nao possuem a msm dimençao")
        }

        let c = new Matrix(a.rows, b.cols)

        for(let i = 1; i<= a.rows; i++){
            for(let j = 1; k <= b.cols; j++){
                for(let k = 1; k <= a.cols; k++){
                    c.set(i,j, c.get(i,j) + a.get(i,k) * b.get(k, j))
                }
            }
        }
        return c
    }

    gauss(a){

    }
}