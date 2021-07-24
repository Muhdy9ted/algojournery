import React, { Fragment, useEffect } from 'react';

const ProblemSolvingApproach = () => {

    /*
        Interview Question:
        write a function which takes in a string and returns counts of each element in the string
    */
    //step 1: a function that returns all the alphabet in a string and the number of times they appeared in the given string
    //step 2: inputs- string, output- an object with the alphabets as keys and count as values
    //step 3: charCount(hello world) -> {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}

    const charCount = (stringInput) => {
        //create object to return
        let result = {}

        //loop over the inputed string with a for loop
        let stringInputLength = stringInput.length
        for(let i = 0; i < stringInputLength; i++){
            console.log(typeof stringInput[i])
            if((typeof stringInput[i] === "number") || (typeof stringInput[i] === "string")){
                
                //if char is a number/letter and is already a key in the return object, add a count of one to it
                let currentElement = stringInput[i].toLowerCase();
                if(result.hasOwnProperty(currentElement) && result[currentElement] > 0){
                    result[currentElement]++
                }else{
                    //if char is a number/letter and is not a key yet, add to the object and set count to 1

                    result[currentElement] = 1
                }
            }
            //if char is not a number/letter, do nothing
        }
         //return object
        return result;
    }

    //step 5: look back and refactor
    const charCount2 = (stringInput) => {
        //create the return object
        let result = {};

        //loop over the inputed string with a for loop
        for(let char of stringInput){
            char = char.toLowerCase();
            if(/[a-z0-9]/.test(char)){
                result[char] = ++result[char] || 1;
            }
        }
        return result;
    }

    //refactor
    const isAlphaNumeric = (char) => {
        let charCode = char.charCodeAt(0);
        //faster than regular expressions
        if(!(charCode > 47 && charCode < 58) && !(charCode > 64 && charCode < 91) && !(charCode > 96 && charCode < 123)){
            return false;
        }
        return true
    }


    const charCount3 = (stringInput) => {
        let result = {};
        for(let char of stringInput){
            if(isAlphaNumeric(char)){
                result[char] = ++result[char] || 1;
            }
        }
        return result;
    }
    useEffect(()=>{
        console.log(charCount('Hello World!'))
        console.log(charCount2('Hello World!'))
        console.log(charCount3('Hello World!'))
    })
    
    return(
        <Fragment>
            <h1>Problem solving steps</h1>
        </Fragment>
    )
}

export default ProblemSolvingApproach;