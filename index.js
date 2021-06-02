const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./lib/config/db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static("client/build"));
}

//CONNECT DATABASE
connectDB();

//ROUTES
app.set("trust proxy", true);
app.use(
  "/api",
  require("./lib/routes/dashboard"),
  require("./lib/routes/comic")
);

app.get("*", (req, res) => {
  console.log("hello");
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
