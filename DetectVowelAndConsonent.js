function vowelAndConsonent(word){
    let result =word;
    if(result == "a" || result =="e" || result == "i" || result =="o" || result =="u"){
        result = result + " " + ' is a Vowel';
    }
    else{
        result = result + " " + ' is a consonent';
    }
    return result;
}

console.log(vowelAndConsonent("A"));