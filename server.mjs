import express from "express";
// import cors from 'cors'

const app = express();
const port = process.env.PORT || 3000;

let todos = [];
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send('testing todos');
// });

app.get("/get-all-todos", (req, res) => {
  res.send(todos);
});

// ye naya todo add krny ke ley he
app.post("/add-todo", (req, res) => {
  todos.push({todoContent : req.body.todo , id : String(new Date().getTime())});

  res.send("todo add ho gaya");
});

// ye todo ko upDate ya edit krny ke ley he
app.patch("/edit-todo/:id", (req, res) => {

  const id = req.params.id
  console.log("ye he id", id);
  
const isFound = false


for (let i = 0; i < todos.length; i++) {
  if (todos[i].id === id) {
    // idher product nil chuka he ab us product ko edit krna he
    todos[i].todoContent = req.body.todoContent

    isFound = true
  }
  
}

if(isFound){
  res.status(201).send("todo updated successfully!")
  
}else{
  
  res.status(200).send('todo notfound')
}

});









// ye todo ko elete krny ke ley he
app.delete("/delete-todo/:id", (req, res) => {});

app.use("/", (req, res) => {
  res.status(404).send("No route found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
