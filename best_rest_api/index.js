const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());//sets up for middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Let's minmic the db using an array

let blogsList = [];

function logger(req,res,next) {
  console.log(req.url);
  console.log(req.body);
  next();
}

function isAuthenicated(req,res,next) {
  console.log("Yes user is authenticated");
  next();
}

app.get("/blogs",isAuthenicated,(req, res) => {
  return res.status(200).json({
    data: blogsList,
    success: true,
  });
});

app.post("/blogs", (req, res) => {
  blogsList.push({
    title: req.body.title,
    content: req.body.content,
    id : Math.floor(Math.random() * 1000)
  });
  return res.status(201).json({
    success: true,
  });
});

app.get("/blogs/:id", (req, res) => {
  console.log(req.params);
  const result = blogsList.filter((blog) => blog.id == req.params.id);
  return res.status(200).json({
    data : result,
    success: true
  })
});

app.delete('/blogs/:id', (req,res) => {
    const blogsList = blogsList.filter((blog) => blog.id != req.params.id);
    return res.status(200).json({
        data:blogsList,
        success :true
    })
})

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
