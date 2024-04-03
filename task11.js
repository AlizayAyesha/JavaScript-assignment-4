// 11. Write a program to take input of a Number and find a Mean of All
// Digits
// E.g: 666 = 6 + 6 + 6 = 18 /3 = 6
// 1246 = 1 + 2 + 4 + 5 = 12 / 4 = 3

function MeanOfDigits(number){
    var numberString = number.toString()

    var sum = 0
    var totalDigits = numberString.lenght

    for(var i =0 ; i < length; i++){
        sum += parseInt(numberString[i])
    }
    var Mean = sum / totalDigits
    return Mean
}

console.log(MeanOfDigits(666))
console.log(MeanOfDigits(1246))
