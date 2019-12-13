let myString = require("../src/string_calculator")

    describe("add function", function(){
                it("calculator should return 0", function(){
                expect(myString.add("0")).toBe(0)
            })
                it("calculator to return 1", function(){
                expect(myString.add("1")).toBe(1)
            })
                it("calculator to return 2", function(){
                expect(myString.add("1, 1")).toBe(2)
            })
    })

    describe("Modify the add function to handle multiple integers", function(){
                it("it should return multiply intergers", function(){
                    expect(myString.add("1,2,3,4")).toBe(10)
            })
                it("should still return 1 ", function(){
                    expect(myString.add("1")).toBe(1)
            })
                it("should still return 2 ", function(){
                    expect(myString.add("1,1")).toBe(2)
            
            })
    })

    describe(" Modify the add function so that it can handle different delimeters", function(){
                it("it should handle new lines between integers", function(){
                    expect(myString.add("1,\n2,")).toBe(3)
            })
                it("it should handle new lines between integers", function(){
                    expect(myString.add("//4\n142")).toBe(3)


            })  

    })

    describe("  Modify the add function so that it can handle negative integers ", function(){
                it("it should throw an error because negatives are not allowed", function(){
                    expect(myString.add("-1,-2,3,3")).ThrowErrorNew(Error)
            }) 
    })     
    
    describe("Modify the add function so that it ignores integers greaterthan or equal to 1000", function(){
                it("it should ignore intergers greater and equal to 1000", function(){
                    expect(myString.add("//;\n1000,1;2")).toBe(3)
            }) 
    })

    describe(" Modify the add function so that it can support delimiters ofany length", function(){
                it("it should support delimiters of any length", function(){
                    expect(myString.add("//***\n3***3")).toBe(6)
            }) 
                
    })   

    describe(" Modify the add function so that it is able to support different delimiters of any length", function(){
                it("it should support different delimiters of any length", function(){
                    expect(myString.add("//[:D][%]\n1::D2%3")).toBe(6)
            }) 
                it("it should support different delimiters of any length", function(){
                    expect(myString.add("//[***][%%%]\n1***2%%%3")).toBe(6)
            })
                it("it should support different delimiters of any length", function(){
                    expect(myString.add("//[ABC][777][:(]\n1abc27773")).toBe(7)
            })
    })

    describe(" Modify the add function so that it can handle invalid input", function(){
                it("it should support different delimiters of any length", function(){
                    expect(myString.add("//;\n1000;1;2;")).toBe(Error)
            }) 
                it("it should support different delimiters of any length", function(){
                    expect(myString.add("   //;\n1000,1;2")).toBe(Error)
            })
                it("it should support different delimiters of any length", function(){
                    expect(myString.add("1,2,3//;\n1000,1;2")).toBe(Error)
            })
    })




