import express from "express";
import path from "path";
const __dirname = path.resolve();

const app = express();

// view engine을 퍼그로 설정하겠다
app.set("view engine", "pug");
// where our template should be
app.set("views", __dirname + "/src/views");
// creating public url that can share some files with the users
app.use("/public", express.static(__dirname + "/src/public"));
// route handler(which is in pug body script)
app.get("/", (req, res) => res.render("home"));
const handleListen = () => console.log("Listening on http://localhost:3000");

app.listen(3000, handleListen);
