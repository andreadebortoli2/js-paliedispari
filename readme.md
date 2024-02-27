# instructions

# 1 - Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

# 2 - Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

# Steps

- # 1
    -ask user for a word
    -set the word as an array:
        -split the word in letters
        -push each letter as an element of the array
    -check if the word is a palindrome
        -read the array in reverse
        -find if the array reverse is equal to the normal array
    -print the result

    -set the exercise as a function


- # 2
    -ask the user for the guess (even/odd)
    -ask the user for a number (1 to 5)
    -generate a number for the computer (1 to 5)
    -add the two numbers
    -check if the result is even or odd
    -print if the user win or loose

    -set the exercise as a function 

# Tools

-prompt
-const / let
-.split()
-.push()
-.reverse()
-for loop
-if / else
-function name(params){ }
-console.log()
-alert
-math.random
-%