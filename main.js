// console.log('HI');

//--- # 1

// -ask user for a word

// const userWord = prompt('write a word');

// -set the word as an array:
//     -split the word in letters
//     -push each letter as an element of the array

/* const lettersList = [];

for (let i = 0; i < userWord.length; i++) {
    const element = userWord[i];

    lettersList.push(element);
}; */

// console.log(lettersList);

// -check if the word is a palindrome
//     -read the array in reverse

// console.log(lettersList.reverse());

//     -find if the array reverse is equal to the normal array

/* let palindromeCheck = false;

for (let i = 0; i < lettersList.length; i++) {

    if (lettersList[i] === lettersList.reverse()[i]) {
        palindromeCheck = true;
    };
}; */

// -print the result

/* if (palindromeCheck === true) {
    console.log('ok');
} else {
    console.log('no');
}; */


// -set the exercise as a function


function palindromeCheck() {
    
    // const userWord = prompt('write a word');
    const userWord = 'otto';

    const lettersList = [];
    
    for (let i = 0; i < userWord.length; i++) {
        const element = userWord[i];
    
        lettersList.push(element);
    };

    for (let i = 0; i < lettersList.length; i++) {

        if (lettersList[i] === lettersList.reverse()[i]) {
            return true;
        };
    };
}

let resultMessage = 'The word is NOT a palindrome';

if (palindromeCheck() === true) {
    resultMessage = 'The word IS a plaindrome';
};

// alert(resultMessage);


// --- # 2

//     -ask the user for the guess (even/odd)

let userGuess;

//     -ask the user for a number (1 to 5)

const userNumber = Number(prompt('write a number between 1 and 5'));
console.log(userNumber);

//     -generate a number for the computer (1 to 5)


function getRandomNumberInt(min, max) {
    return Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
};

const computerNumber = getRandomNumberInt();
console.log(computerNumber);

//     -add the two numbers

const sum = userNumber + computerNumber;

//     -check if the result is even or odd

let winnerMessage = 'the sum is odd';

if (sum % 2 === 0) {
    winnerMessage = 'the number is even'
}

//     -print if the user win or loose


console.log(winnerMessage);


//     -set the exercise as a function