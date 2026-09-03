const express = require("express");

const app = express();

let port = 3000;

let user = [];

app.use(express.json());

app.post("/create", (req, res) => {
  let body = req.body;

  user.push(body);

  res.send("user saved successfully ");
});

app.get("/", (req, res) => {
  res.send(user);
});

app.put("/update/:id", (req, res) => {
    let {id} =  req.params;
    let {users} = req.body;
    

    let updateUser = user.map((val) => val.id === id ? {...val, users}: val);

    res.send(updateUser);

});

//delete

app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;

  let userData = user.filter((val) => val.id !== id);

  user = userData;
  res.send(userData);
});

app.listen(port, () => {
  console.log("vastaka huiya");
});
