/*
1. Declare a variable vowel consonent and word.

2. Create a for loop  starts with 0 till length of the array

3. Check the array for vowel letter(a,e,i,o,u) using if statement.

4. If the word contains vowels increase the vowel count.

5. Else increase the consonent count

6. print the result.

*/



let vowel=0, consonent=0, word="hello";

for(let i=0; i<word.length;i++){
    if((word[i]==='a') || (word[i]==='e') || (word[i]==='i') ||(word[i]==='o') || (word[i]==='u')){
        vowel++;
    }
    else{
        consonent++;
    }
}
console.log(vowel+" "+consonent);