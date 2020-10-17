let score = 2;
function grade(){
    if (score <= 39 ){
        console.log("F");
    }else if( 40 <= score && score <= 44 ){
        console.log("E");
    }else if( 45 <= score && score <= 49 ){
        console.log("D");
    }else if( 50 <= score && score <= 59 ){
        console.log("C");
    }else if( 60 <= score && score <= 69 ){
        console.log("B");
    }else if(70 <= score && score <= 100 ){
        console.log("A");
    }
    else{
        console.log("error: value entered is not a valid score ");
    };
}



grade();





let ph = 49;
if( 7 > ph && ph >= 0 ){
    console.log("acidic");
}else if( 14 >= ph && ph  >= 7 ){
    console.log("alkaline");
}else if(ph == 7 ){
    console.log("neutral");
}else{
    console.log("invalid");
};