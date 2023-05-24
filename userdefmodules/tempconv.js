//c to f ---- ((c*(9/5)) +32)
//f to c --> ((f-32)*(5/9))
const c2f = (c)=>((c*(9/5)) +32)

function c2f_2(c){
    return ((c*(9/5)) +32)
}

const f2c = (f) => ((f-32)*(5/9))

function f2c_2(f){
    return ((f-32)*(5/9))
}

module.exports = {
        c2f,
        c2f_2,
        f2c,
        f2c_2
    }
