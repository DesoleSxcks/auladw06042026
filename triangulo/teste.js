import {tipoTriangulo} from "./triangulo.js"

console.log(tipoTriangulo(2, 2, 2)) // equilateral
console.log(tipoTriangulo(10, 10, 10)) // equilateral
console.log(tipoTriangulo(3, 4, 4)) // isosceles
console.log(tipoTriangulo(4, 3, 4)) // isosceles
console.log(tipoTriangulo(4, 4, 3)) // isosceles
console.log(tipoTriangulo(10, 10, 2)) // isosceles
console.log(tipoTriangulo(3, 4, 5)) // escaleno
console.log(tipoTriangulo(10, 11, 12)) // escaleno
console.log(tipoTriangulo(5, 4, 2)) // escaleno
console.log(tipoTriangulo(0, 0, 0)) // invalido
console.log(tipoTriangulo(3, 4, -5)) // invalido
console.log(tipoTriangulo(1, 1, 3)) // invalido
console.log(tipoTriangulo(2, 4, 2)) // invalido
