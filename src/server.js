import express from "express";
import path from "path";
const __dirname = path.resolve();

const app = express();
const port = 3000;

// view engine을 퍼그로 설정하겠다
app.set("view engine", "pug");
// where our template should be
app.set("views", __dirname + "/src/views");
// creating public url that can share some files with the users
app.use("/public", express.static(__dirname + "/src/public"));
// route handler(which is in pug body script)
app.get("/", (req, res) => res.render("home"));
// req: 요청 router의 params를 가져올 수 있음.
app.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id === "dog") {
    res.json({ sound: "멍멍" }); // /dog -> {"sound": "멍멍"}
  } else if (id === "cat") {
    res.json({ sound: "야하옹" }); // /cat -> {"sound": "야하옹"}
  }
  res.json({ sound: "..." }); // /?? -> {"sound": "..."}
  console.log(id);
});

const handleListen = () => console.log("Listening on http://localhost:3000");

app.listen(port, handleListen);
