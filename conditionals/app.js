//Ejercicios Conditionals Exercises. Level: Low

/* Ejercicio 1
Starting from the following example, create a conditional block that evaluates whether the variable num1 is greater than num2, if so, print the value of num1 via the console, otherwise print num2.
let num1 = 4
let num2 = 5 */

/*let num1 = 4
let num2 = 5

if( num1 > num2){
    console.log (num1)
}else{
    console.log(num2)
}*/



/* Ejercicio 2 
Based on exercise 1, now modify the block as follows:

If num1 is greater than num2, print num1 through the console,

if num2 is greater, print num2 and finally

if they are equal, print a string that says “The numbers are equal ”*/


/*let num1 = 3
let num2 = 3

if( num1 > num2){
    console.log (num1)
}else if (num2>num1){
    console.log(num2)
}else{
    console.log("The numbers are equal ")
}*/



/* Ejercicio 3
Based on exercise 1, create a conditional block that evaluates whether these variables are equal or not, if so, print a string through the console “The numbers are equal”, otherwise “The numbers are different” */

/*let num1 = 3
let num2 = 3

if( num1 == num2){
    console.log ("The numbers are equal ")

}else{
    console.log("The numbers are different")
}*/



/* Ejercicio 4 
Starting from the following example, create a conditional block that evaluates whether one of these variables is greater than the other; if so, display “The date [variable 1] is greater than [variable 2]” by console, and, If they are the same, print “The dates are the same”

Tip! Use backticks to print via console.

    let date1 = "2018-9-2"

    let date2 = "2023-7-5"

    The date 2023-7-5 is greater than the date 2018-9-2*/

/*let date1 = "2018-9-2"

let date2 = "2023-7-5"

if( date1 > date2){
    console.log ("The date" + " " + date1 + " " + "is greater than the date" + " " + date2 )
}else if (date2>date1){
    console.log("The date" + " " + date2 + " " + "is greater than the date" + " " + date1)
}else{
    console.log("The dates are the same")
}*/



/*Ejercicio 5
Now try changing the value of the variables. As in the previous exercises, a string must be printed through the console that says if date 1 is greater than date 2 or the opposite.

Tip! Investigate how the strings compare.*/

/*let date1 = "2024-10-2"

let date2 = "2030-19-6"

if( date1 > date2){
    console.log ("The date" + " " + date1 + " " + "is greater than the date" + " " + date2 )
}else if (date2>date1){
    console.log("The date" + " " + date2 + " " + "is greater than the date" + " " + date1)
}else{
    console.log("The dates are the same")
}*/


/*Ejercicio 6 
In this case, create a conditional block that evaluates which of the three numbers stored in the variables is the largest. Print a string through the console that says “The number [ ] is the largest”.
   

    let number1 = 5

    let number2 = 7

    let number 3 = 9*/

/*let number1 = 5

let number2 = 7

let number3 = 9

if( number1 > number2 && number1 > number3){
    console.log ("The number" + " " + number1 + " " + "is the largest" )   
} else if (number2 > number1 && number2 > number3){
    console.log ("The number" + " " + number2 + " " + "is the largest" )   
}else{
    console.log ("The number" + " " + number3 + " " + "is the largest" )
}*/

//Ejercicios Conditionals Exercises. Level: Medium

/*Ejercicio 1
Using a "switch", create a program that allows you to enter these color names on the screen: red, blue or green. And print on the screen in each case:
red: “The color of passion”
blue: “The color of the sea.”
green: “The color of nature”
Tip! Don't forget the break statement*/

/*let color = prompt("Ingrese un color (rojo, azul o verde):");

switch (color) {
    case "red":
        console.log("The color of passion");
        break;
    case "blue":
        console.log("The color of the sea.");
        break;
    case "green":
        console.log("The color of nature");
        break;
    default:
        console.log("Color desconocido");
}*/

/*Ejercicio 2
Using a switch, create a program that allows you to enter on the screen: 
- two numerical values (number from 1 to 100)
- an operation (addition, subtraction, multiplication, division)
- and print on the screen in each case:
    sum: first value + the second
    subtraction: first value - the second
    multiplication: first value * second
    division: first value / second
With the corresponding literal ("the sum of <num1> and <num2> is...", etc.)
Tip! Don't forget the break statement*/

/*let num1 = parseFloat(prompt("Ingrese el primer valor (número del 1 al 100):"));
let num2 = parseFloat(prompt("Ingrese el segundo valor (número del 1 al 100):"));
let operation = prompt("Ingrese la operación (suma, resta, multiplicación, división):").toLowerCase();

if (isNaN(num1) || isNaN(num2) || num1 < 1 || num1 > 100 || num2 < 1 || num2 > 100) {
    console.log("Por favor, ingrese valores numéricos del 1 al 100.");
} else {
    switch (operation) {
        case "suma":
            console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
            break;
        case "resta":
            console.log(`La resta de ${num1} y ${num2} es: ${num1 - num2}`);
            break;
        case "multiplicación":
            console.log(`La multiplicación de ${num1} y ${num2} es: ${num1 * num2}`);
            break;
        case "división":
            if (num2 !== 0) {
                console.log(`La división de ${num1} entre ${num2} es: ${num1 / num2}`);
            } else {
                console.log("No se puede dividir por cero.");
            }
            break;
        default:
            console.log("Operación no válida. Por favor, ingrese suma, resta, multiplicación o división.");
    }
}*/

/*Ejercicio 3 
Starting from the following structure, create a conditional block that
receives 2 objects representing people with the properties: name, age, height
and print by console in the same console.log:
Which of the two people is the taller?
Which is the oldest?
Tip! You can use nested if or logical operators.
let person = {
       name = Juan,
       age = 39,
       height = 1.69
}
Example Result: "Juan is taller and older than Rosa"*/

/*let persona1 = {
    nombre: "Juan",
    edad: 39,
    altura: 1.69
};

let persona2 = {
    nombre: "Rosa",
    edad: 45,
    altura: 1.65
};

// Se verifica cuál persona es más alta y mayor
if (persona1.altura > persona2.altura) {
    if (persona1.edad > persona2.edad) {
        console.log(`${persona1.nombre} es más alto y mayor que ${persona2.nombre}`);
    } else if (persona1.edad < persona2.edad) {
        console.log(`${persona1.nombre} es más alto pero más joven que ${persona2.nombre}`);
    } else {
        console.log(`${persona1.nombre} es más alto pero tiene la misma edad que ${persona2.nombre}`);
    }
} else if (persona1.altura < persona2.altura) {
    if (persona1.edad > persona2.edad) {
        console.log(`${persona2.nombre} es más alto pero más joven que ${persona1.nombre}`);
    } else if (persona1.edad < persona2.edad) {
        console.log(`${persona2.nombre} es más alto y mayor que ${persona1.nombre}`);
    } else {
        console.log(`${persona2.nombre} es más alto pero tiene la misma edad que ${persona1.nombre}`);
    }
} else {
    if (persona1.edad > persona2.edad) {
        console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma altura, pero ${persona1.nombre} es mayor`);
    } else if (persona1.edad < persona2.edad) {
        console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma altura, pero ${persona2.nombre} es mayor`);
    } else {
        console.log(`${persona1.nombre} y ${persona2.nombre} tienen la misma altura y la misma edad`);
    }
}*/

/*Ejercicio 4
Create a program that allows you to enter on the screen:
your name, age, height and vision.
and print through the console a string “You are qualified to drive”,
For this the person must:
Be at least 18 years old.
Measure more than 110 cm.
Have a vision of at least 8 out of 10.

Tip! Remember prompt( ) to enter data on the screen.*/

/*let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
let altura = parseFloat(prompt("Ingrese su altura en centímetros:"));
let vision = parseFloat(prompt("Ingrese su visión (en una escala de 0 a 10):"));

// Verificar si la persona cumple con los requisitos para conducir
if (edad >= 18 && altura > 110 && vision >= 8) {
    console.log("¡Estás calificado para conducir!");
} else {
    console.log("Lo siento, no cumples con los requisitos para conducir.");
}*/


/*Ejercicio 5 
Create a program that allows you to enter your age on the screen and print it on the screen if you are:
infant (0 to 12 years)
adolescent (13 to 18 years old)
older young (19 to 45 years)
elderly (over 45 years)
Is he really that old? (more than 100 show)
Tip! Remember alert( ) to display data on the screen.*/

/*let age = parseInt(prompt("Ingrese su edad:"));

// Verificar en qué rango de edad 
if (age >= 0 && age <= 12) {
    alert("Eres un niño(a)!");
} else if (age >= 13 && age <= 18) {
    alert("Eres un adolescente!");
} else if (age >= 19 && age <= 45) {
    alert("Eres un adulto joven!");
} else if (age > 45 && age <= 100) {
    alert("Eres un adulto mayor!");
} else if (age > 100) {
    alert("¿En serio tienes más de 100 años?");
} else {
    alert("Edad no válida.");
}*/



/*Ejercicio 6
Create a program that allows you to enter only numbers from 1 to 3 on the screen and then any other numerical data. Print on screen:
1: “The number entered is [ ]”
2: “Twice the number entered is [ ]”
3: “Three times the number entered is [ ]”
another: “That value is not allowed”
Tip! Remember alert( ) to display data on the screen.*/

/*let number = parseInt(prompt("Ingrese un número del 1 al 3:"));

// Verificar si el número está en el rango del 1 al 3
if (number >= 1 && number <= 3) {
    switch (number) {
        case 1:
            alert("El número ingresado es 1");
            break;
        case 2:
            alert("El doble del número ingresado es " + (number * 2));
            break;
        case 3:
            alert("El triple del número ingresado es " + (number * 3));
            break;
    }
} else {
    alert("Ese valor no está permitido");
}*/


