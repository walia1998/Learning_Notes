let studnets = [ 
   {id : "1" , name : "Ashish Walia",sports:"Cricket"} ,
   {id : "2" , name : "Sania Walia",sports:"Cricket"} ,
   {id : "3" , name : "Akshu Walia",sports:"Volley Ball"} ,
   {id : "4" , name : "Aadu Walia",sports:"judo"} ,
   {id : "5" , name : "Samriti Walia",sports:"hockey"} ,
]

const newStudents = studnets.filter((currvalue) => currvalue.sports === "Cricket")
.map((currValue) => {
    return `<li>${currValue.name}</li>`
})

console.log(newStudents);

const container = document.getElementById('container');

container.innerHTML = `<ul>${newStudents.join} </ul>`