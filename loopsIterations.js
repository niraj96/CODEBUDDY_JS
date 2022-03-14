// level {1/2/3}
//level 2

//sum of the first n fibonacci numbers
let sumofFibonacciSeries = (n=6) =>{

    let firstNum = 1;
    let secNum = 0;
    let totSum = 0;

    for(let i=0; i<n; i++){
        let sum = firstNum + secNum;
        totSum +=sum;
        firstNum = secNum;
        secNum = sum;
    }

    return totSum;
}