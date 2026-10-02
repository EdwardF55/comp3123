const express = require("express");

const SERVER_PORT = 3000;

// Initialize Express application
const app = express();

// Middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Middleware to parse URL-encoded bodies in incoming requests
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
//http://localhost:3000/index.html
// app.use(express.static('public'));

//http://localhost:3000/static/index.html
app.use("/static", express.static("public"));

// Define a route for the root URL
// http://localhost:3000/
app.get("/", (req, res) => {
  res.send("<h1>Hello, world!</h1>");
});

// app.get('/index', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

// http://localhost:3000/hello
app.get("/hello", (req, res) => {
  res.send("<h1>Hello from the /hello route!</h1>");
});

// http://localhost:3000/students (GET)
app.get("/students", (req, res) => {
  //res.send('<h1>List of students</h1>');
  const students = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
  ];
  //res.send(students);
  res.status(200).json(students);
});

// http://localhost:3000/students (POST)
app.post("/students", (req, res) => {
  res.send("<h1>Student created successfully!</h1>");
});

//Query parameter example
//http://localhost:3000/employee?name=John&city=Toronto
app.get("/employee", (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const city = req.query.city;

  res.send({
    method: "GET",
    path: `/employee?name=${name}&city=${city}`,
    name: name,
    city: city,
  });
});
//Path Parameter example
//http://localhost:3000/employee/John/Toronto
app.get("/employee/:name/:city", (req, res) => {
  console.log(req.params);
  const name = req.params.name;
  const city = req.params.city;

  res.send({
    method: "GET",
    path: `/employee/${name}/${city}`,
    name: name,
    city: city,
  });
});

//Body Parameter example
app.post("/employee", (req, res) => {
  const name = req.body.name;
  const city = req.body.city;

  res.send({
    method: "POST",
    path: `/employee`,
    name: name,
    city: city,
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port http://localhost:${SERVER_PORT}/`);
});
