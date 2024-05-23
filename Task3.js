function adderCreate(addValue){
    return function(value){
        return addValue + value
    }
}

add1Func = adderCreate(1)
console.log(add1Func(2))
console.log(add1Func(4))

add9000Func = adderCreate(9000)
console.log(add9000Func(2))
console.log(add9000Func(4))