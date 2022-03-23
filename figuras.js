// Codigo del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "Los lados del triangulo miden: "
//   + ladoTriangulo1
//   + "cm, " 
//   +ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");


function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Codigo del circulo
console.group("Círculos")

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circuferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Area
function areaCirculo(radio) {
  return (radio * radio) * PI;
}
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();


// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function alturaTriangulo(ladoA, ladoB, ladoBase) {
  if (ladoA != ladoB) {
      console.error("Los lados a y b no son iguales");
  } else {
    
  }
}

function calcularPerimetroTriangulo(){
  const InputLado1 = document.getElementById("InputLado1");
  const value = InputLado1.value;
  const inputLado2 = document.getElementById("InputLado2");
  const value = inputLado2.value;
  const Inputbase = document.getElementById("InputBase");
  const value = Inputbase.value;

  const perimetro = perimetroTriangulo(value);
  alert(perimetro);
}
function calcularAreaTriangulo() {
  const input = document.getElementById("InputTriangulo");
  const value = input.value;

  const area = areaTriangulo(value);
  alert(area);
}

function calcularPerimetroCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}