const box1 = document.getElementById('box-1');
box1.style.backgroundColor = 'yellow';

const newDiv = document.createElement('box-5');
newDiv.innerText = 'box-5';
newDiv.classList.add('box')

const container = document.getElementById('Container');
container.appendChild(newDiv)






console.log(box1);
