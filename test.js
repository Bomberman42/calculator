var readline = require('readline');

var question = 'sim';
var firstNumber = 0;
var secondNumber = 0;
var result = 0;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askAQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function sum(a, b){
    return Number(a) + Number(b)
}

function subtraction(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function division(a, b){
    return a / b;
}

async function askAQuestions() {
  question = await askAQuestion('Você quer realizar alguma operação matemática? Responda somente com "Sim" e "Não". ');

  while(question != 'Não' && question != 'não'){
      
    while(question != 'Sim' && question != 'sim' && question != 'Não' && question != 'não'){
      console.log('Sinto muito, não compreendi sua resposta.');
      question = await askAQuestion('Você quer realizar alguma operação matemática? Responda somente com "Sim" e "Não". ');
    } 
    
    if(question == 'Não' || question == 'não'){
      break;
    }
    
    var operation = await askAQuestion('Qual operação deseja fazer: "Soma", "Subtração", "Multiplicação" ou "Divisão"? ');

    while (operation != "Soma" && operation != "soma" && operation != "Subtração" && operation != "subtração" && operation != "Multiplicação" && operation != "multiplicação" && operation != "Divisão" && operation != "divisão") {
        console.log(`Operação não encontrada!`);
        operation = await askAQuestion('Qual operação deseja fazer: "Soma", "Subtração", "Multiplicação" ou "Divisão"? ');
    }

    if(operation == 'Soma' || operation == 'soma'){
        firstNumber = await askAQuestion('Qual o primeiro número? ');
        secondNumber = await askAQuestion('Qual é o segundo número? ');
    
        result = sum(firstNumber, secondNumber);
    
        console.log(`A soma de ${firstNumber} mais ${secondNumber} é:  ${result}`)
    }
    
    if(operation == 'Subtração' || operation == 'subtração'){
        firstNumber = await askAQuestion('Qual o primeiro número? ');
        secondNumber = await askAQuestion('Qual é o segundo número? ');
    
        result = subtraction(firstNumber, secondNumber);
    
        console.log(`A subtração de ${firstNumber} menos ${secondNumber} é: ${result}`)
    }
    
    if(operation == 'Multiplicação' || operation == 'multiplicação'){
        firstNumber = await askAQuestion('Qual o primeiro número? ');
        secondNumber = await askAQuestion('Qual é o segundo número? ');
    
        result = multiply(firstNumber, secondNumber);
    
        console.log(`A multiplicação de ${firstNumber} multiplicado por ${secondNumber} é: ${result}`)
    }
    
    if(operation == 'Divisão' || operation == 'divisão'){
        firstNumber = await askAQuestion('Qual o primeiro número? ');
        secondNumber = await askAQuestion('Qual é o segundo número? ');
    
        result = division(firstNumber, secondNumber);
    
        console.log(`A divisão de ${firstNumber} dividido por ${secondNumber} é: ${result}`)
    }

  }

  rl.close();
}

askAQuestions();