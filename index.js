const express = require("express");
const app = express();
const path = require("path");
const { dirname } = require("path");

// settings
app.set("port", 3000);
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// middlewares

//routes
app.use(require("./routes/index"));
//static files
app.use(express.static(path.join(__dirname, "public")));
// listenign the server
app.listen(app.get("port"), () => {
	console.log("server on port", app.get("port"));
});
