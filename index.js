import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";
const app = express();
const db = new sqlite3.Database("./db/anand1.db");
app.use(cors())
app.use(bodyParser.json())

app.post("/upload", (req,res) => {
    console.log(req.body);
    db.run(`CREATE TABLE IF NOT EXISTS t1 (
        firstName TEXT,
        lastName TEXT,
        email TEXT,
        message TEXT
      );`);
      
    db.run(`INSERT INTO t1(firstName,lastName,email,message) VALUES("${req.body.firstName}", "${req.body.lastName}", "${req.body.email}", "${req.body.message}" )`)
    res.send("Received here...")
})
app.get("/", function(req, res) {
    res.send("1")
  })
app.listen(80,function(){
    console.log("listining to port 80");
})

