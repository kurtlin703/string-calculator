"use strict";

function add(string_number) {

    if (string_number == "") {
                return 0;
    }

        
        let replaceNewLinewithComma = string_number.replace("\n", ",");
        let stringSplit = replaceNewLinewithComma.split(",");

        
function escapingRegexSpecialCharacters(regexChars){

        return regexChars.replace(/[$^&*()+?}{\[\]\\\/.=]/g, '\\$&')
    }

    if (string_number.startsWith("//")) { 
            
        let delimiterString = string_number.match(/\/\/.+?\n/)[0]; 
        let delimiters = delimiterString.match(/(?<=\/\/).+?(?=\n)/)[0]; 
            delimiters = new RegExp(escapingRegexSpecialCharacters(delimiters), 'g')
             
        let numberOfString = string_number.match(/(?<=\n).*/g)[0]
            stringSplit = numberOfString.replace(delimiters, ',').split(",");
                

    if (delimiterString.startsWith("//[")) {

        let delimitersWithoutBrackets = string_number.match(/(?<=\[).*(?=\])/g)[0]       
            delimitersWithoutBrackets = delimitersWithoutBrackets.replace(/\]\[/g, "|")         
            delimiters = new RegExp(escapingRegexSpecialCharacters(delimitersWithoutBrackets), 'g')          
            stringSplit = numberOfString.split(delimiters);
                    
        }

    }

        let result = 0;

        for (var i = 0; i < stringSplit.length; i++) {
            if(stringSplit[i] >= 1000){
                    continue
            }

            if(stringSplit[i] < 0){
                throw new Error("negatives not allowed")
            }
                result = result + Number(stringSplit[i]);
            }
            if(isNaN(result)|| string_number.match(/\D$/)){
            throw new Error("invalid input")
            }
            return result 
}
    module.exports = {
        add
    }
            