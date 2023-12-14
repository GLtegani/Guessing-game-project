const randomNumber = Math.round(Math.random() * 10);
let attempts = 1;


const handleClick = event => {
   event.preventDefault();

   const inputNumber = document.querySelector('#inputNumber');
   
   if(Number(inputNumber.value) == randomNumber) {
      document.querySelector('.screenOne').classList.add('hide');
      document.querySelector('.screenTwo').classList.remove('hide');
      document.querySelector('.screenTwo h2').innerText = `Acertou em ${attempts} tentativas!`;
      
   };
   
   attempts++;
};


