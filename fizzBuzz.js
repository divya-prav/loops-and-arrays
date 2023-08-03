/*
   1. Declare a variable fizzBuzzArray and result Array.
  
   2. create a for loop with start with 0 index goes till the end of the array

   3. Write a if statement with condition to check the number is divisible by 3 and  divisible by 5 

   4. If the number is divisible by both values push  "FizzBuzz" to the result array

   5. write a else-if to check the number is divisible by 3

   6. If the number is divisible by 3 push "Fizz" to the result Array

   7. write a else-if to check the number is divisible by 5

   8.If the number is divisible by 5 push "Buzz" to the result Array.

   9. In case the number doesn't  satisfies all the above condition. push the number to the result array

   10. print the result array
 
 */





let fizzBuzzArray = [1,2,3,4,5,15];
let resultArray=[];

for(let i=0;i<fizzBuzzArray.length;i++){
    if((fizzBuzzArray[i] % 3 === 0) && (fizzBuzzArray[i] % 5 === 0)){
        resultArray.push("FizzBuzz");
    }
    else if((fizzBuzzArray[i] % 3 === 0)){
        resultArray.push("Fizz");
    }
    else if(fizzBuzzArray[i] % 5 === 0){
        resultArray.push("Buzz");
    }
    else{
        resultArray.push(fizzBuzzArray[i]);
    }
}
console.log(resultArray);