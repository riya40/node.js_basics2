


const factorial= require('./userdefmodules/fact')

const temp=require('./userdefmodules/tempconv')


const ans=factorial(6);

console.log(factorial(6))

console.log(`function 32 celius to f:`,temp.c2f_2(32))
console.log(`function 94f to c:`,temp.f2c_2(94))
console.log(`30 celius to f:`,temp.c2f(30))
console.log(`function to 98f to c`,temp.f2c(98))