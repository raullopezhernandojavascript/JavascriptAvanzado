//Boolean

let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 42;
let denominador: number = 6
let resultado = numerador / denominador;

// Arrays

// 1 Arreglos de un solo tipo (Solo String)
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];

// 2 Arreglo de varios tipos (String y numero)
let peopleAndNumbers: Array<string | number>

// Enum

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Color = Color.Azul
console.log(`Mi color favorito es ${colorFavorito}`)


// ANY

let comodin: any = "Joker";
comodin = { type: 'Wildcard' };

//Object

let someObject: object = { type: 'Wildcard' }


console.log("Hola Mundo");

function add(a: number, b: number) {
    return a + b;
}

const sum = add(2, 3);

//Funciones

function add2(a: number, b: number): number {
    return a + b;
}

const sum2 = add2(2, 6);

function createAdder(a: number):(number) => number {
    return function (b: number) {
        return b+a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

//Aqui vemos una funcion para realizar un concatenado de nombre y apellido
// Si queremos que uno de los valores sea opcional le pondremos la '?' despues del
// parametro. De esta forma el parametro podra ser "string" o "undefined"

function fullName (firstName :string, lastName?:string):string{
    return `FirstNAme ${firstName} - ${lastName}`
}

const raul = fullName('Raul');

// Valor por Omision
function fullNameOmision (firstName :string, lastName:string = 'Lopez'):string{
    return `FirstName ${firstName} - LastName ${lastName}`
}

const fran = fullNameOmision('Fran');

//interfaces

enum Colores{
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul' 
}
interface Rectangulo{
    alto:number,
    ancho:number,
    color?:Colores // Colores es opcional.
}

let rectanguloEjemplo: Rectangulo = {
    ancho:4,
    alto:6,
    color:Colores.Azul
}

function area(r:Rectangulo){
    return r.alto + r.alto;
}

const areaRect = area(rectanguloEjemplo);
console.log(areaRect);

rectanguloEjemplo.toString = function(){
    return this.color ? `Un rectangulo ${this.color}`: `Un rectangulo`;
}

console.log(rectanguloEjemplo.toString);