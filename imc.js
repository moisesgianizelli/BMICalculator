const calcular = document.getElementById('calcular');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if (nome.value !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classification = '';

    if (valorIMC < 18.5) {
      classification = 'You are under weight';
    } else if (valorIMC < 25) {
      classification = 'Well done';
    } else if (valorIMC < 30) {
      classification = 'You are over weight';
    } else if (valorIMC < 35) {
      classification = 'Obesity level 1';
    } else if (valorIMC < 40) {
      classification = 'Obesity level 2';
    } else {
      classification = 'Obesity leve 3 | WARNING';
    }

    resultado.textContent = `${nome} your BMI is ${valorIMC} and you are ${classification}`;
  } else {
    resultado.textContent = 'ERROR';
  }
}

calcular.addEventListener('click', imc);
