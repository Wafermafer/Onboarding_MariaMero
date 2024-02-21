//Ejercicios JS Basic Exercise. Level: Low

/* Ejercicio 1
Starting from the following example, create a conditional block that evaluates whether the variable num1 is greater than num2, if so, print the value of num1 via the console, otherwise print num2.
let num1 = 4
let num2 = 5  */

/*let myName = "Maria"

console.log (myName)*/



/* Ejercicio 2
Based on exercise 1, now modify the block as follows:

If num1 is greater than num2, print num1 through the console,

if num2 is greater, print num2 and finally

if they are equal, print a string that says “The numbers are equal ” */

/*let myLastName = "Mero"

console.log (myLastName)*/



/* Ejercicio 3 
Based on exercise 1, create a conditional block that evaluates whether these variables are equal or not, if so, print a string through the console “The numbers are equal”, otherwise “The numbers are different”  */

/*let myAge = "24"

console.log (myAge)*/



/*Ejercicio 4
Starting from the following example, create a conditional block that evaluates whether one of these variables is greater than the other; if so, display “The date [variable 1] is greater than [variable 2]” by console, and, If they are the same, print “The dates are the same”
Tip! Use backticks to print via console.

    let date1 = "2018-9-2"

    let date2 = "2023-7-5"

    The date 2023-7-5 is greater than the date 2018-9-2 */

/*let myPet = "Tonky"

console.log (myPet)*/



/* Ejercicio 5
Now try changing the value of the variables. As in the previous exercises, a string must be printed through the console that says if date 1 is greater than date 2 or the opposite.
Tip! Investigate how the strings compare. */

/*let petAge = "6"

console.log (petAge)*/



/*Ejercicio 6
6. In this case, create a conditional block that evaluates which of the three numbers stored in the variables is the largest. Print a string through the console that says “The number [ ] is the largest”.
   

    let number1 = 5

    let number2 = 7

    let number 3 = 9*/

/*let fullName = myName +  " " + myLastName

console.log (fullName)*/





//Ejercicios JS Basic Exercise. Level: Medium

/* Ejercicio 1
Create a variable sumAges, subtractAges, productAges, divisionAges and calculate their respective operations with the variables myAge and agePet.*/

/*let miEdad = 22
let edadMascota = 6

// Operaciones aritméticas
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

// Imprimir los resultados
console.log(`La suma de las edades es: ${sumaEdades}`)
console.log(`La resta de las edades es: ${restaEdades}`)
console.log(`El producto de las edades es: ${productoEdades}`)
console.log(`La división de las edades es: ${divisionEdades}`) */



/* Ejercicio 2
Create an object called student with a minimum of 5 properties, display said object using console.table( ) and also display each of the object's properties separately through the console.*/

/*let student = {
    nombre: "Mafer",
    edad: 22,
    grado: "Universitario",
    promedio: 8,
    trabaja: true
};

console.table(student);

// Mostrar cada propiedad del objeto por separado
console.log("Nombre del estudiante:", student.nombre);
console.log("Edad del estudiante:", student.edad);
console.log("Grado del estudiante:", student.grado);
console.log("Promedio del estudiante:", student.promedio);
console.log("¿Está trabajando el estudiante?", student.trabaja); */



/* Ejercicio 3
Create an object called pet with a minimum of 5 properties, display said object using console.table( ) and also display each of the object's properties separately through the console. */

/*let pet = {
    nombre: "Tonky",
    especie: "Perro",
    edad: 6,
    color: "Marrón con blanco",
    vacunado: true
};

console.table(pet);

// Mostrar cada propiedad del objeto por separado
console.log("Nombre de la mascota:", pet.nombre);
console.log("Especie de la mascota:", pet.especie);
console.log("Edad de la mascota:", pet.edad);
console.log("Color de la mascota:", pet.color);
console.log("¿Está vacunada la mascota?", pet.vacunado);*/



/*Ejercicio 4
Create an array called fruits with a minimum of 5 elements and display the entire array in the console and also display each of the elements separately in the console.*/

/*let frutas = ["Fresa", "Banana", "Naranja", "Uva", "Mora"];

console.log("Array completo de frutas:", frutas);

// Mostrar cada elemento del array por separado en la consola
console.log("Primera fruta:", frutas[0]);
console.log("Segunda fruta:", frutas[1]);
console.log("Tercera fruta:", frutas[2]);
console.log("Cuarta fruta:", frutas[3]);
console.log("Quinta fruta:", frutas[4]);*/


//Ejercicios JS Basic Exercise. Level: High
/* Ejercicio 1
Use a prompt ( ) that allows the entry of an age on the screen and compare it with the number 18, once this is done, save the result in a variable called IamAdult and display a message in the console that says:
"I am an adult" (and the value of the variable).*/

/*let edad = prompt("Por favor, ingresa tu edad:")

const IamAdult = edad >= 18

if (IamAdult) {
    console.log("Soy un adulto. Edad:", edad);
} else {
    console.log("No soy un adulto. Edad:", edad);
}*/

/* Ejercicio 2
Create an array called "numbers" with a minimum of 5 elements and display the entire array and each of the elements separately in the console.*/

/*const numbers = [10, 20, 30, 40, 50];

console.log("Array completo:", numbers);

console.log("Elemento 1:", numbers[0]);
console.log("Elemento 2:", numbers[1]);
console.log("Elemento 3:", numbers[2]);
console.log("Elemento 4:", numbers[3]);
console.log("Elemento 5:", numbers[4]);*/


/* Ejercicio 3
Create an array called "family" with a minimum of 5 objects and display the entire array and each of the elements separately in the console.*/

/*const family = [
    { name: "Justino", age: 35, relation: "Father" },
    { name: "Paula", age: 32, relation: "Mother" },
    { name: "Edelisa", age: 10, relation: "Daughter" },
    { name: "Fernando", age: 8, relation: "Son" },
    { name: "Jesus", age: 65, relation: "Grandmother" }
];

console.log("Array completo:", family);

family.forEach((member, index) => {
    console.log("Elemento", index + 1 + ":", member);
});*/

/*Ejercicio 4
Create a variable called "randomText" forming a phrase with the second element of the fruits array, the fourth element at numbers array and the first property of the fifth object of the family array.*/

/*const segundaFruta = fruits[1]; // Segundo elemento del array "fruits"
const cuartoNumero = numbers[3]; // Cuarto elemento del array "numbers"
const primerPropiedad = family[4].nombre; // Primer propiedad del quinto objeto en el array "family"

// Formar la frase utilizando los elementos obtenidos
const randomText = `${segundoFruta} ${cuartoNumero} ${primerPropiedad}`;

console.log("Frase aleatoria:", randomText);*/
