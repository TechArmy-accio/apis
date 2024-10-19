const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 5001;

app.use(cors());
app.use(express.json());


function sumOf2(req, res){
  //  console.log("hello",req.query);
  //  let num1 = +req.query.num1;
  //  let num2 = +req.query.num2;

  // console.log("hello",req.body);  
   
  // let num1 = +req.headers.num1 
  // let num2 = +req.headers.num2

  let num1 = +req.body.num1;
  let num2 = +req.body.num2;



   let addition = num1 + num2;


   res.json({"message": `The sum of ${num1} and ${num2} is ${addition}`}); 
   
}
app.post("/sum", sumOf2);


// input via body 
// input via query/Params
// input via headers











app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})