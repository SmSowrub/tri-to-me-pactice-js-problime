// not a done  

let arr=[
  {
   fname:'John',
  },'fname'
]
let arr2=[
  {
   fname:'John',
  },'lastName'
]
function deleatProparty(arr){
    if( arr[0].hasOwnProperty(arr[1])){
      delete arr[0][arr[1]];
        return "YES";
    }
    else { return "NO";}
}



console.log(deleatProparty(arr2));
