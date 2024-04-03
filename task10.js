// 10. Write a program that round a number to a given decimal places.

function roundToDecimal(number,decimalPlaces){
    return number.toFixed(decimalPlaces)
}

var num1 = 16.765
var num2 = 12.37982
var num3 = -9.3079499
var roundednumber1 = roundToDecimal(num1, 2)
var roundednumber2 = roundToDecimal(num2, 2)
var roundednumber3 = roundToDecimal(num3, 4)
console.log(roundednumber1);
console.log(roundednumber2);
console.log(roundednumber3);
