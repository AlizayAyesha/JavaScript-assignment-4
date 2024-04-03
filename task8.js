// 8. Convert number in words. Example
// Input
// 23
// 123

// Output
// Twenty Three
// One Hundred and Twenty Three
var singleDigits = ["","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
var tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]

function convertTowDigitNumber(number){
    if(number<10){
        return singleDigits[number]
} else if (
    number >= 10 && number < 20
){ return teens [number -10]}
else {
    var tensDigit = Math.floor(number / 10)
    var onedigit = number % 10
    return tens[tensDigit] + " " + singleDigits[onedigit]

}
}

function convertNumberToWords(number){
    if (number === 0) {
        return "zero"
    } 
    var word = ""

    if (number>=100){
        var hundredsDigits = Math.hundredsDigits(number/100)
        word += singleDigits[hundredsDigits] + "Hundred"
        number %= 100
    }

    word = convertNumberToWords(number)
    return word.trim
} 
var number = [23, 123]
for(var i = 0 ; i< number.lenght ; i++) {
    document.write("<p>" +number[i]+"in words" + convertNumberToWords(number[i])+ "</p>")

}