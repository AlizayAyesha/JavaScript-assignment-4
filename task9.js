// Remove all available HTML tags from given string
// <p><strong><em>Only print this</em></strong></p>

function removeHtmlTags(inputstring){
    return inputstring.replace(/<[^>]*>/g, "")
}

var stringWithTags = <p><strong><em>Only print this</em></strong></p>
var stringWithOutTags = removeHtmlTags(stringWithTags)
console.log(stringWithOutTags)
