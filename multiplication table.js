for (let i = 1; i <= 9; i++){
    let s = '';
    for (let j = 1; j<=9; j++){
        s += i + "*" + j + "=" +(i*j)+"\t" 
    }
    console.log(s);
}