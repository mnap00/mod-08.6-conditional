// script.js
/* eslint-disable no-console */

var a = prompt('Enter number a:'),
    b = prompt('Enter number b:'),
    value = (a * a) - (2 * a * b) - (b * b);

console.log('Value is: ' + value + '.');

if ( value > 0 ) {
    console.log ('Value is positive number');
} else if ( value < 0 ) {
    console.log ('Value is negative number');
} else {
    console.log ('Value equals zero');
}
