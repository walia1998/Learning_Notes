// const box1 = document.getElementById('box-1');
// box1.style.backgroundColor = 'yellow';

const newDiv = document.createElement('box-5');
newDiv.innerText = 'box-5';
newDiv.classList.add('box')

const container = document.getElementById('Container');
container.appendChild(newDiv)


const boxes = document.getElementsByClassName('box');
// box3.classList.add('rounded-box');

for (let i = 0; i < boxes.length; i++) {
    if (i % 2 === 0) { 
        boxes[i].classList.add('rounded-box');
    }
}
const newP = document.getElementById('para');
newP.style.color = 'blue'
newP.style.backgroundColor = 'yellow'




console.log(box1);
