// variables

let attempts = 1;
const randomNumber = Math.round(Math.random() * 10);

const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');

const firstScreen = document.querySelector('.screenOne');
const secondScreen = document.querySelector('.screenTwo');


// functions

const toggleScreen = () => {
   firstScreen.classList.toggle('hide');
   secondScreen.classList.toggle('hide');
};

const handleTryClick = event => {
   event.preventDefault(); // não faça o padrao deste evento   

   const inputNumber = document.querySelector('#inputNumber');
   
   if(Number(inputNumber.value) == randomNumber && attempts == 1) {
      toggleScreen();
      secondScreen.querySelector('h2').innerText = `Acertou em ${attempts} tentativa!`;
      
   } else if(Number(inputNumber.value) == randomNumber && attempts > 1) {
      toggleScreen();
      secondScreen.querySelector('h2').innerText = `Acertou em ${attempts} tentativas!`;
   };
   
   inputNumber.value = "";
   attempts++;
};   

const handleResetClick = () => {
   toggleScreen();
   attempts = 1;
};


// Events

// Adicone um evento e sua reação (event and Listener)
// O nome do evento importa, pois ele simula como se você o adicionasse no HTML
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);



