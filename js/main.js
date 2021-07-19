// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// numbers from 1 to 100 print

var iterationNumber = 100;
for (var i = 0; i < iterationNumber; i++) {   
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0)
    {
        // 3 and 5 multiples
        console.log("FizzBuzz")
    } else if ( (i + 1) % 5 == 0)
    {
        // 5 multiples
        console.log("Buzz");
    } else if ( (i + 1) % 3 == 0)
    {
        // 3 multiples
        console.log("Fizz");
    } else 
    {
        //all the other numbers
        console.log( i + 1);
    }
}