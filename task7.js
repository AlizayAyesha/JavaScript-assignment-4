// 7. You have a string “The quick brown fox jumps over the lazy dog”.
// Write a program to count the number of occurrences of the word “the”
// in given string.

var sentence = "The quick brown fox jumps over the lazy dog"

var lowercaseSentence = sentence.toLowerCase()

var word = lowercaseSentence.split("")

var count = 0
for(var i = 0 ; i < word.length ;i++){
if(word[i]=== "the"){
    count++
}
}
document.write("<p> The  occurrences of the word the :" + count +"</p>");