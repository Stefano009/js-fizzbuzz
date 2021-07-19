// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// numbers from 1 to 100 print

var iterationNumber = 100;
var numberFizzBuzz = [];
var numbers = document.getElementById("numbers");
var buttons = document.getElementById("buttons");
for (var i = 0; i < iterationNumber; i++) {   
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0)
    {
        // 3 and 5 multiples
        console.log("FizzBuzz");
        numberFizzBuzz.push("FizzBuzz");
    } else if ( (i + 1) % 5 == 0)
    {
        // 5 multiples
        console.log("Buzz");
        numberFizzBuzz.push("Buzz");
    } else if ( (i + 1) % 3 == 0)
    {
        // 3 multiples
        console.log("Fizz");
        numberFizzBuzz.push("Fizz");
    } else 
    {
        //all the other numbers
        console.log( i + 1);
        numberFizzBuzz.push(i + 1);
    }
    buttons.innerHTML += "<p class='ms_button_decoration'>" + numberFizzBuzz[i] + "</p><br>"
}
console.log(numberFizzBuzz);
