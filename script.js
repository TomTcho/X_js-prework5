/* PODSTAWOWE TYPY DANYCH! */

let name = 'Monika';

console.log(name);


let number = 10;

console.log(2 * number);

let boolean = false;


console.log(boolean);


let array = [1, 2, 3, 108];

console.log(array);


let objectH1 = document.querySelector('h1');

console.log(objectH1);

objectH1.innerText = 'Kurs Javascript_prework5';

console.log(objectH1);

if (boolean)   {
    console.log("WARUNEK SPEŁNIONY")
}

if (number === 108)   {
    console.log("WARUNEK SPEŁNIONY - number === 108")
} else if (number === 110) {
    console.log("WARUNEK SPEŁNIONY - number === 110")
}else {
    console.log("ŻADEN Z WARUNKÓW NIE ZOSTAŁ SPEŁNIONY")
}

/* OPERATORY TO = , OPERATORY ARYTMETYCZNE TO +, -, *, / etc */

let result = number * 2;

let numberTxt = '10'
console.log(result);

if (number == numberTxt) {
    console.log("Wartości zmiennych są równe(txt & num)");
}

let numberNum = 10

let numberNum2 = 9


if (number === numberNum) {
    console.log("Wartości zmiennych są równe(num & num)");
} else {
    console.log("Wartości zmiennych nie są równe(txt & num)");
}

if (number != numberTxt) {
    console.log("Wartości zmiennych NIE są równe (txt & num)");
}

if (number != numberNum2) {
    console.log("Wartości zmiennych NIE są równe (num & num)");
}

if (number !== numberTxt) {
    console.log("Wartości zmiennych i ich typy NIE są równe (txt & num)");
}

/* Kawałki bloku wydzielone, które uywamy do zadań, które można wielokrotnie wykorzystywać */
 
function multiply(num1, num2){
     let result = num1 * num2;
     return result;
 }

 console.log( multiply(2, 3) );

 let wynik_mnożenia = multiply(108, 2);

 console.log(wynik_mnożenia)

 let wynikmnożenia = multiply(numberNum2, 2);

 console.log(wynikmnożenia)

 /* Aby funkcja zadziałała należy ją wywołać */

 

 /* modyfikacja dokumentu (hmtl, js, css etc.) za pomocą JS */

 let myHeading = document.querySelector('h1');

 console.log(myHeading)

 let myHeading2 = document.querySelector('h1');
 myHeading2.textContent = 'TTC - JS';


 console.log(myHeading2)


