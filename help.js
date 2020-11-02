#!/usr/bin/env node

var colors = require('colors');

console.log('\nCOMPUTER COFFEE'.rainbow.underline)

console.log('\nCommands:'.blue)
console.log('coffee-help ' + 'Shows this message'.green)
console.log('coffee-drink ' + 'Keeps your computer awake\n'.green)

console.log('Settings:'.blue)
console.log('export COFFEE_KEY={key} ' + 'key to be pressed'.green)
console.log('export COFFEE_INTERVAL={interval}  ' + 'key repeat inteval '.green + 'MEASEURED IN SECONDS. CAN\'T HAVE DECIMALS.'.yellow)
console.log('export COFFEE_STOP={time} ' + 'when the computer is allowed to sleep'.green + ' MILITARY TIME FOMRAT (EXAMPLE: 15:30)\n'.yellow) 