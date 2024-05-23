function showIntervals(n1, n2, interval){
    let currN = n1

    let intervalID = setInterval(function(){
        console.log(currN)
        if (currN == n2){
            clearInterval(intervalID)
        }
        currN++
    }, interval)
}

showIntervals(5, 15, 1000);
// showIntervals(2, 12, 500);
