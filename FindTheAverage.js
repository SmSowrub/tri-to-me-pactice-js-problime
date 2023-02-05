function average(avr){
    let arr=avr;
    let sum =0;
for(let i =0;i<arr.length;i++){
    sum=sum + arr[i];
    // console.log(i,sum)
}
 let averageAll= sum / arr.length;
 let totalMarks= averageAll.toFixed(2);
return totalMarks;

}

let results=[75.25, 65, 80, 35.45, 99.50]
console.log(average(results));
