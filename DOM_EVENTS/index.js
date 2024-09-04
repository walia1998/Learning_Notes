// Event Listener


const container = document.getElementById('container');
container.addEventListener('click', ()=>{
console.log("key was clicked")
},true)// Capture

const box1 =  document.getElementById('box-1');
box1.addEventListener('mouseenter', () =>{
    console.log('Key was pressed')
});

const input = document.getElementById('input');
input.addEventListener('keypress', (e)=>{
    console.log("Key was down", e.key)
})