import express from "express";
// import cors from 'cors'

const app = express();
const port = 3000;

app.use(express.json())
const todos = []

app.get("/get-all-todos", (req, res) => {
  res.send(todos);
});


// ye naya todo add krny ke ley he
app.post("/add-todo", (req, res) => {

  todos.push(req.body.todos)

  res.send("todo add ho gaya")

 });

// ye todo ko upDate ya edit krny ke ley he
app.patch("/edit-todo/:id", (req, res) => { });

// ye todo ko elete krny ke ley he
app.delete("/delete-todo/:id", (req, res) => { });




app.use("/", (req, res) => {
  res.status(404).send('No route found');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
