const express = require('express');
const app = express();

const PORT = 5001;

app.use(express.json());

function greet(req, res){

    res.json({"message": "good Monring"})

}

app.get("/greet", greet);


function sumOf2(req, res){
     let num1 = req.body.num1;
     let num2 = req.body.num2;

     let add = num1 + num2;

     res.json({"sum": add})
}


app.post("/sum", sumOf2);











app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})