// const year = 30046;

// if(year%4==0){
//     console.log("LeapYear");
// }
// else{
//     console.log("not a Leap Year");
// }

function LeapYear(year){
    if(year%4==0){
        return 1;
    }
    else{
        return 0;
    }
}
const year = LeapYear(2000);
if(year==1){
    console.log("LeapYear");
}
else{
    console.log("Not a leap year");
}

