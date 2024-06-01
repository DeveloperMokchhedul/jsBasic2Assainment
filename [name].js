

// question 1 start

function celsiusToFahrenheit(celsius){
    return celsius*9/5+32
}
console.log(" for '0 celcius' fahrenheite is = "+celsiusToFahrenheit(0))
console.log(" for '25 celcius' fahrenheite is = "+celsiusToFahrenheit(25))

// question 1 end



// question 2 start

function isEven(num){
    return num%2==0
}
console.log("4 is even = "+isEven(4));
console.log("7 is even = "+isEven(7));

// question 2 end


// question 3 start

function sum(a, b){
    return a+b
}
console.log("3 & 4 sum is = "+sum(3,4));
console.log("10, 20 sum is = "+sum(10,20));

// question 3 end



// question 4 start


function findSmallestNum(arr){
    return Math.min(...arr)
}

console.log( "[3,5,1,9] smallest number is = "+findSmallestNum([3,5,1,9]));
console.log("[-1,-5,0,10] smallest number is = "+findSmallestNum([-1,-5,0,10]));

// question 4 end


// question 5 start

function countVowels(str){
    let vowels = 'aeiouAEIOU'
    let count = 0

    for (let char of str) {
        // If the character is a vowel, increment the count
        if (vowels.includes(char)) {
            count += 1;
        }
    }
    return count
}
console.log("in 'hellow world' number of vowels is  = "+ countVowels("hello world"));

// question 5 end



// question 6 start

function getFirstElement(arr){
    return arr[0]
}
console.log(" [1,2,3] first element is = "+getFirstElement([1,2,3]));
console.log('["a", "b", "c"] first element is = ' +getFirstElement(["a", "b", "c"]));


// question 6 end




// question 7 start


function isArrayEmpty(arr){
    return arr.length == 0
}

console.log("is array empty ="+isArrayEmpty([]));
console.log("is array empty ="+isArrayEmpty([1,2,3]));


// question 7 end


// question 8 start


function factorialize(num){
    if(num===0||num===1) return 1;
    return num* factorialize(num-1);
  
}
console.log("5 factorial number is = "+factorialize(5));
console.log("7 factorial number is = "+factorialize(7));

// question 8 end




// question 9 start

function reverseString(str){

    let splitData = str.split("");
    let reverseData =  splitData.reverse()
    let reverseArray = reverseData.join("")

    return reverseArray
}
console.log("'hello' reverse is = "+reverseString("hello"));
console.log( "'world' reverse is = "+reverseString("world"));

// question 9 end




// question 10 start

function toLowerCase(str){
    return str.toLowerCase();
}

console.log(" 'HELLO WORLD' lowerCase is = "+toLowerCase("HELLO WORLD"));
console.log(" 'Javacript' lowerCase is = "+toLowerCase("JavaScript"));

// question 10 end






// question 11 start

function stringLength(str){
    return str.length
}

console.log("'hello' length is = "+stringLength("hello"));
console.log(" 'world' length is = "+stringLength("world"));


// question 11 end



// question 12 start


function mergeArrays(arr1, arr2){
    return arr1.concat(arr2)
}

console.log("'[1,2,3] ,[4,5,6]' merge array is = "+mergeArrays([1,2,3], [4,5,6]));
console.log('["a", "b"], ["c", "d"] = '+ mergeArrays(["a", "b"], ["c", "d"]));


// question 12 end




// question 13 start

function getLastElement(arr){
    return arr.pop()
}
console.log("'[1,2,3]' last element of array is = "+getLastElement([1,2,3]));
console.log('["a", "b"] last element of array is = '+getLastElement(["a", "b", "c"]));

// question 13 end





// question 14 start


function getFirstCharecter(str){
    return str[0]
}
console.log("first charectar of 'hello is' = "+getFirstCharecter("hello"));
console.log("first charectar of world is = "+getFirstCharecter("world"));


// question 14 end




// question 15 start

function sumArray(arr){
    let sum = 0 
    for(let i=0; i<arr.length; i++){
         sum += arr[i]
    }

    return sum
}

console.log(" [1,2,3,4] sum of array is = "+sumArray([1,2,3,4]));
console.log("[-1,-2,-3,-4] sum of array is = " +sumArray([-1,-2,-3,-4]));
console.log("[1.5,2.5,3.5] sum of array is = "+sumArray([1.5,2.5,3.5]));

// question 15 end




