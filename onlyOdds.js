/*

1.  Declare the variable inputArray[] for input and result array for storing output

2.  create a for loop with start with 0-index till the length of the array

3.  Use if condition to check the number is even or odd  

4.  If the number is odd then push the value to the result Array else continue.

5.  print the result array 
*/

let inputArray=[2,4,6,8,11,20,15,22] , result=[]; 

for(let i=0;i<inputArray.length;i++){
   
    if(!(inputArray[i] % 2 === 0)){
       
         result.push(inputArray[i]);
    }

   
}
console.log(result);




