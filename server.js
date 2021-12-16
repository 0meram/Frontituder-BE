const express = require("express");
const app = express();
const port = 8000 || "https://herolo-be.herokuapp.com" ;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/search", require("./routes/search"));

app.get("/", (req, res) => {
	res.send(`<h1>Herolo Server</h1>`);
});

app.listen(port, () => {
	console.log(`im ready to work on port ${port}`);
});
