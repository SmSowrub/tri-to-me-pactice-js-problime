function ConvertTemperature( fc){
    let temp =(fc-32)/1.8;
    return temp;
}
// console.log(ConvertTemperature(50));


function subtraction (num1, num2){
    let moms =1000;
    let apple=num1;
    let orange =num2;
    const total= apple+orange;
    let back = moms-total;
    return back;
}

console.log(subtraction(300,400))