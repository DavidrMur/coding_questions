function fib(num) {
    if (num === 1 || num === 2) return 1;
    if (num === 0) return 0;

    return (fib(num-1) + fib(num-2));

}

// function helperFuction(num) {
//     if (num === 1) return 
// }

console.log(fib(10));