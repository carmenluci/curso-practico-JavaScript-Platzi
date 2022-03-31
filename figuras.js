// código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado
}

// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

// console.log(
//    "Los lados del triángulo miden: "
//    + ladoTriangulo1
//  + "cm, "
//    + ladoTriangulo2
//  + "cm, "
//  + baseTriangulo
//  + "cm^2"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base; 
} 
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm")

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 
// console.log("El área del triángulo es: " + areaTr0iangulo + "cm^2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radioCirculo * 2;
}
// console.log("El diametro del círculo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}    

// console.log("El perímetro del círculo es: " + perimetroCirlo + "cm");

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El área del círculo es: " + areaCirculo + "cm^2");


console.groupEnd();
