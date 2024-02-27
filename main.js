// console.log('HI');

// -ask user for a word

// const userWord = prompt('write a word');
const userWord = 'ciao';
// const userWord = 'anna'; // palindroma

// -set the word as an array:
//     -split the word in letters
//     -push each letter as an element of the array

const lettersList = []

for (let i = 0; i < userWord.length; i++) {
    const element = userWord[i];
    
    lettersList.push(element)

}

// console.log(lettersList);

// -check if the word is a palindrome
//     -read the array in reverse

// console.log(lettersList.reverse());

//     -find if the array reverse is equal to the normal array

let palindromeCheck = false

for (let i = 0; i < lettersList.length; i++) {
    
    if (lettersList[i] === lettersList.reverse()[i]) {
        palindromeCheck = true
    }
}

// -print the result

if (palindromeCheck === true) {
    console.log('ok');
} else {
    console.log('no');
}


// -set the exercise as a function
