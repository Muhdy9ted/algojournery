import React, { Fragment, useEffect } from 'react';


const BigONotation = () => {

    const addUpTo = (n) => {
        let total = 0;
        for(let i = 0; i <= n; i++ ){
            total += i;
        }
        return total;
        /*
            the time complexity is O(n)
            linear complexity
        */
    }


    const addUpTo2 = (n) => {
        return n * (n + 1)/2

        /*
            the time complexity is O(1)
            constant complexity
        */
    }

    const logAtLeast5 = (n) => {
        for(let i = 1; i <= Math.max(5, n); i++){
            console.log(i)
        }

        /*
            the time complexity is O(n)
            linear complexity
        */
    }

    const logAtMost5 = (n) => {
        for(let i = 1; i <= Math.min(5, n); i++){
            console.log(i)
        }

        /**
         * the time complexity is O(1)
         * constant complexity
         */
    }

    const sum = (arr) => {
        let total = 0;
        for(let i = 0; i < arr.length; i++){
            total += arr[i]
        }
        return total;

        /**
         * the space complexity is O(1)
         * constant complexity
         */
    }

    const double = (arr) => {
        let newArr = [];
        for(let i = 0; i < arr.length; i++){
            newArr.push(2 * arr[i]);
        }
        return newArr;

        /**
         * the space complexity is O(n)
         */
    }

    useEffect(() => {
       addUpTo(4);
       addUpTo2(4);
       logAtLeast5(8);
       logAtMost5(6);
       sum([3,4,5]);
       double([3,4,5]);
    })
    

    return(
        <Fragment>
            <h1>The big O Notation</h1>
        </Fragment>
    )
}

export default BigONotation