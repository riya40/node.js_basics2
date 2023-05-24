const utility = require('./userdefmodules/utility')
const logger = require('./userdefmodules/logger')

console.log('#-------Program start-------------')
const today = new Date();
console.log('--------------------')
console.log(today)
console.log('--------------------')
console.log(utility.formatDate(today));
console.log('--------------------')
const name = 'ms lakshmi'
console.log(utility.capitalizeString(name))
console.log('--------------------')
logger.info(`this is information message, howdy all!! (-_-)(^_^)`);
console.log('--------------------')
logger.error('this is customer error')