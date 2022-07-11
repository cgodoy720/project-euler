// Multiples of 3 & 5


function sumOfMultiples(highestNum, mult1, mult2){
    // Create a var to hold sum
    let sum = 0
    // Iterate up to 1000
    for (let i = 0; i < highestNum; i++) {
        // If the number is a multiple of 3 or of 5
        // Below are two conditions written differently, but that check the same thing. (One is for multiples of 3, the other for multiples of 5, otherwise they are the same expression)
        if(!(i % mult1) || i % mult2 === 0){
            //    sum += that number
            sum += i
        }
        
        
    }
    // Return sum
    return sum
}

// console.log(sumOfMultiples(1000, 3, 5))



// Even Fibonacci Numbers
// Add up all the fib numbers up to but not including 4000000
// Return sum

// Pseudocode

// Step 1





function fibSequence(highestNum){
    // Create a var for evenSum
    let evenSum = 0
    
    // Create a fibs array, w 1 and 2 as starting values
    const fibs = [1, 2]
    
    // Use a while loop to iterate while (last element in fibs) is less than 4000000
    while(fibs[fibs.length - 1] < highestNum){
        // Get sum of last two values
        let sum = fibs[fibs.length - 1] + fibs[fibs.length - 2] 
        // Push that sum to our fibs array
        fibs.push(sum)
    }

    // Step 2
    // Pop() off the last number in the fibs array
    fibs.pop()

    // Iterate over the fibs array
    for (const fib of fibs) {
        // Add the even numbers in the array to evenSum
        if(fib % 2 === 0){
            evenSum += fib
        }
    }
    // Return evenSum
    return evenSum
}


console.log(fibSequence(4000000))



function fib2Sequence(highestNum){
    // Create a var for evenSum
    let evenSum = 2
    
    // Create a fibs array, w 1 and 2 as starting values
    const fibs = [1, 2]
    
    // Use a while loop to iterate while (last element in fibs) is less than 4000000
    let i = 3
    while(i < highestNum){
        // Push that sum to our fibs array
        fibs.push(i)
        if(i % 2 === 0){
            // Get sum of last two values
            evenSum += i
        } 
        i += fibs[fibs.length - 2]
    }

    return evenSum
}

console.log(fib2Sequence(4000000))

