var countdownGenerator = function (x) {
    var counter = x
    console.log(counter)
    return function () {
    
        if (counter > 0) {
            console.log("T-minus", counter)
            counter = counter -1 
        } else if
            (counter === 0) {
            console.log("Blast Off!") 
            counter --
        } else {
            console.log("Rockets already gone, bub!")
    }
    }
    
};
/* your code here */

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!