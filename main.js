

for (let i = 1; i<=5; i++){
    for(let j = 5; j>i; j--){
        document.write(" &nbsp ");
    }
    for(let k=1; k<=(2 * i -1); k++){
        document.write("x");
    }
    document.write("<br/>")
}

for (let i = 5; i>=1; i--){
    for(let j = 5; j>i; j--){
        document.write(" &nbsp ");
    }
    for(let k=1; k<=(2 * i -1); k++){
        document.write("x");
    }
    document.write("<br/>")
}