//Problem 3:
//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143?

function primeFactor(number) {
    
    var largestFactor = 1;
    
    while (number % 2 === 0) {
        largestFactor = 2;
        number = number / 2;
    }
    
    var oddNumber = 3;
    
    while (number != 1) {
        while (number % oddNumber === 0) {
            largestFactor = oddNumber;
            number = number / oddNumber;
        }
        oddNumber += 2;
    }
    
    return largestFactor;
}

primeFactor(600851475143);