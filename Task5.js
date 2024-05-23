const power = (x, n) => {
    let res = 1
    // console.log(x, n)
    for (let i = 0; i < n; i++){
        res *= x
    }

    return res
}

console.log(power(4, 4))
console.log(power(2, 5))
console.log(power(5, 2))