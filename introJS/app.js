//Ejercicios JS Basic Exercise. Level: Low

/* Ejercicio 1
Create a variable called myName and store your first name in it:
In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "Rose". Then add a line of code to print the variable name to the console after the previous message. 

Save your JavaScript file in your editor. Reload the HTML page in your browser. You should see your name printed. If not, investigate and fix (do this step for the next exercises too) */

/*let myName = "Maria"

console.log (myName)*/



/* Ejercicio 2
Create a variable called myLastName and store your last name in it. */

/*let myLastName = "Mero"

console.log (myLastName)*/



/* Ejercicio 3 
Create a variable called myAge and save your age in it. 
Tip! Do not use string quotes for numbers.*/

/*let myAge = "24"

console.log (myAge)*/



/*Ejercicio 4
Create a variable called myPet and save the name of your pet in it. If you don't have a pet, you can invent a name.*/

/*let myPet = "Tonky"

console.log (myPet)*/



/* Ejercicio 5
Create a variable called petAge and save the pet's age in it.
(As in the previous case, you can invent this number if you don't have a pet). */

/*let petAge = "6"

console.log (petAge)*/



/*Ejercicio 6
Create a variable called fullName and store the concatenation of myFirstName and myLastName in it..
   

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
