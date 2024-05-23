function showNumberType(num){
    if (typeof num == "number"){
        if (num <= 0){
            console.log("Entered not natural number!")
        }
        else if (num > 1000){
            console.log("Entered very large number!")
        }
        else if (num == 1){
            console.log("Entered 1 - specific natural number!")}
        else{
            for (i = 2; i < num; i++){
                if (num % i == 0)
                {
                    // console.log("Entered COMPLEX number!");
                    console.log(`Entered COMPLEX number! First divider = ${i}`);
                    return;
                }
            }

            console.log("Entered SIMPLE number!")
        }
    }
    else
        console.log("Entered not a number!")
}

// showNumberType(1001);
// showNumberType(0);
// showNumberType(1);
// showNumberType(2);
// showNumberType(3);
// showNumberType(4);
// showNumberType(5);
// showNumberType(6);
showNumberType(771);
showNumberType(999);
showNumberType(777);
showNumberType(991);