"use strict";

function add(string_number) {

        if (string_number == "") {
                return 0;
        }

            let stringNumber = string_number.split(/,|;|\n|\*|\/\/|\w|:/g)
            let replaceNewLinewithComma = string_number.replace("\n", ",");
            let stringSplit = replaceNewLinewithComma.split(",");

        if (string_number.startsWith("//")) { 
            
            let delimiterString = string_number.match(/\/\/.+?\n/)[0]; 
            let delimiters = delimiterString.match(/(?<=\/\/).+?(?=\n)/)[0]; 
            
                
            let numberOfString = string_number.match(/(?<=\n).*/g)[0]
            stringSplit = numberOfString.replace(delimiters, ',').split(",");
                

            if (delimiterString.startsWith("//[")) {

            let delimitersWithoutBrackets = delimiters.match(/(?<=\[).*(?=\])/g)[0]
            delimitersWithoutBrackets = delimitersWithoutBrackets.replace(/\]\[/g, "|")
            stringSplit = numberOfString.split(delimitersWithoutBrackets)[0];
                    
            }

            if(delimiterString.startsWith('//')== NaN){
                throw new Error("Incorrect input")
            }

        }

    let result = 0;

        for (var i = 0; i < stringSplit.length; i++) {
            if(stringSplit[i] >= 1000){
                    continue
            }

            if(stringSplit[i] < 0){
                throw new Error ("negatives not allowed")
            }
                result = result + Number(stringSplit[i]);
            }
            
            return result 
}
        module.exports = {
            add
        }