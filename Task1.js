function showArrayNumberInfo(){
    let arr = [true, 1, 2, 0, 4, 5, 6, 2.5, 0, 4, "Qwerty", [1, 2, 3]];

    let zero_count = 0;
    let odd_count = 0;
    let even_count = 0;
    let float_values = 0;
    let non_nums = 0;
    
    arr.forEach(function(value, index, array){
        if (typeof value == "number"){
            if (value === Math.floor(value)){
                if (value == 0){
                    zero_count++;
                }
                else if (value % 2 == 1){
                    odd_count++;
                }
                else if (value % 2 == 0){
                    even_count++;
                }
            } else {
                float_values++;
            }
        } else {
            non_nums++;
        }
    })
    
    console.log(
        `
        Array have 
            zeros: ${zero_count},
            odd values: ${odd_count},
            even values: ${even_count},
            float values: ${float_values},
            non num values: ${non_nums}.
    `);
}

showArrayNumberInfo();