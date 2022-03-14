// level {1/2/3}
//Level 2


//filter all odd integers here
let removeAllOdd = (arr = [1, 3, 4, 6, 7, 8])=>{
   
    for(let i=0; i<arr.length; i++){
        let num = arr[i];
        if(num%2===0){
            arr.splice(i,1);
        }
    }

    return arr;

}

//replace vowels to uppercase
let uppercaseVowels = (str='Elie')=>{
    let vowels = ['a','e', 'i', 'o', 'u'];
    let strArr = str.split("");
    str = strArr.map((char)=>{
        if(vowels.indexOf(char) != -1){
            return char.toUpperCase();
        }else{
          return char
        }
    });

    return str;
}

//find max number in arr
let findmaxNum = (arr=[1, 3, 4, 6, 7, 8, 2, 5])=>{
    let max = 0;
    arr.forEach(num=>{
        if(max<num){
            max = num;
        }
    })
    return max;
}