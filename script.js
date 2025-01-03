const buttons = document.querySelectorAll('button');
console.log(buttons);


buttons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('Button clicked!');
    });
  });
//button.forEach(item=>item.addEventListener("click"), console.log(button));