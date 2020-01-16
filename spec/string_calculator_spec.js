let myString = require("../src/string_calculator")
let add = myString.add;

    describe("add", function(){
                it("calculator should return 0", function(){
                expect(add("0")).toBe(0)
            })
                it("calculator to return 1", function(){
                expect(add("1")).toBe(1)
            })
                it("calculator to return 2", function(){
                expect(add("1, 1")).toBe(2)
            })
   
                it("it should return multiply intergers", function(){
                    expect(myString.add("1,2,3,4")).toBe(10)
            })
                it("should still return 1 ", function(){
                    expect(myString.add("1")).toBe(1)
            })
                it("should still return 2 ", function(){
                    expect(myString.add("1,1")).toBe(2)          
            })
   
                it("should be 3", function(){
                    expect(myString.add("1,\n2")).toBe(3)
            })
                it("should be 3", function(){
                    expect(myString.add("//4\n142")).toBe(3)
            })  
                it("it should throw an error because negatives are not allowed", function(){
                    expect(function(){add("-1,-2,3,4")}).toThrow()
            }) 
    
                it("it should ignore intergers greater and equal to 1000", function(){
                    expect(myString.add("//;\n1000,1;2")).toBe(3)
            }) 
                it("it should support delimiters of any length", function(){
                    expect(myString.add("//***\n3***3")).toBe(6)
            }) 
                it("it should return 6", function(){
                    expect(myString.add("//[:D][%]\n1:D2%3")).toBe(6)
            }) 
                it("it should return 6", function(){
                    expect(myString.add("//[***][%%%]\n1***2%%%3")).toBe(6)
            })
                it("it should return 7", function(){
                    expect(myString.add("//[ABC][777][:(]\n1ABC27773:(1")).toBe(7)
            })
  
                it("it should return invalid input 1", function(){
                    expect(function(){add("//;\n1000;1;2;")}).toThrow()
            }) 
                it("it should return invalid input 2", function(){
                    expect(function(){add("   //;\n1000,1;2")}).toThrow()
            })
                it("it should return invalid input 3", function(){
                    expect(function(){add("1,2,3//;\n1000,1;2")}).toThrow()
            })
    })