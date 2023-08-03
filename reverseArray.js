/*
1. Declare a input and output array.

2. create a loop start from length of the array (i.e last index of an array) 
each time decrease the index value till it becomes index 0.

3.Push the input value to the output array.

4.print the output array.




*/





let input=[1,2,3],output=[];

for(let i=input.length-1;i>=0;i--){
    output.push(input[i]);

}

console.log(output);
