'use strict';



const bills = [125,555, 45];

function fifteenTip (values){
    return values*15/100;
}
function othrerVlues (values){
    return values*20/100;
}

function calTip (bills){
    const between300 = fifteenTip(bills);
    const above300 = othrerVlues(bills);
    if(bills>=50 && bills<=300){
        return `the bills ${bills}, tip ${between300} total ${bills+between300}`;
    }else{
        return`the bills ${bills} , tip ${above300} total ${bills+above300}`;
    }
}

const bill = [calTip(bills[2]), calTip(bills[1]), calTip(bills[0])];
console.log(bill)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>or<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const calTip = function (bills){
//     return bills>=50 && bills<=300 ? bills*0.15: bills*0.20;
// }
// const bills =[255,555,44];
// const tip = [calTip(bills[2]), calTip(bills[1]), calTip(bills[0])];

// const total = [bills[0]+tip[0], bills[1]+tip[1], bills[2]+tip[2]];
// console.log(total)