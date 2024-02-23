alert("Bem-vindo(a)! Esta é a calculadora de operações simples.");

let firstNumber;
let secondNumber;

while (true) {
  firstNumber = prompt("Digite o primeiro número:");

  if (!isNaN(firstNumber)) {
      firstNumber = Number(firstNumber);
      break;
  } else {
      alert("Por favor, insira um valor numérico válido.");
  }
}

while (true) {
  secondNumber = prompt("Digite o segundo número:");

  if (!isNaN(secondNumber)) {
      secondNumber = Number(secondNumber);
      break;
  } else {
      alert("Por favor, insira um valor numérico válido.");
  }
}

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(`A soma de ${firstNumber} + ${secondNumber} é de: ${sum}`)
alert(`A subtração de ${firstNumber} - ${secondNumber} é de: ${sub}`)
alert(`A multiplicação de ${firstNumber} * ${secondNumber} é de: ${mult}`)
alert(`A divisão de ${firstNumber} / ${secondNumber} é de: ${div}`)
alert(`O resto da divisão de ${firstNumber} / ${secondNumber} é de: ${restDiv}`)

if(sum % 2 === 0) {
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é impar: ${sum}`)
}

if(firstNumber === secondNumber) {
  alert("E por fim, os dois números são iguais.")
} else {
  alert("E por fim, os dois números são diferentes.")
}