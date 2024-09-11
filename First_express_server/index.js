
const express = require('express');

const app = express();
const PORT = 3000;


app.get('/', (req,res) => {
  res.send('Hello World')
});

app.post('/home', (req,res) => {
    res.send("Welcome Home")
});

app.patch('/home', (req,res) => {
    res.json({
        message: "This is a patch request",
        success : true
    })
})

app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}` )
})