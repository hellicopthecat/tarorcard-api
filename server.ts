import express from "express";
import path from "path";
import cors from "cors";
const PORT = 8080;
const app = express();
app.use(cors());

app.use("/static", express.static("/public"));

app.get("/", (req, res) => {
  res.send("Read README.md");
});
app.get("/card/major", (req, res) => {
  const majorCardPath = path.join(__dirname, "./src/cards/major_card.json");
  res.json(require(majorCardPath));
});
app.get("/card/minor/cups", (req, res) => {
  const cupsCardPath = path.join(__dirname, "./src/cards/minor_cups.json");
  res.json(require(cupsCardPath));
});
app.get("/card/minor/sword", (req, res) => {
  const swordCardPath = path.join(__dirname, "./src/cards/minor_sword.json");
  res.json(require(swordCardPath));
});
app.get("/card/minor/wand", (req, res) => {
  const wandCardPath = path.join(__dirname, "./src/cards/minor_wand.json");
  res.json(require(wandCardPath));
});
app.get("/card/minor/pentacle", (req, res) => {
  const pentacleCardPath = path.join(__dirname, "./cards/minor_pentacle.json");
  res.json(require(pentacleCardPath));
});
const serverListen = () => {
  console.log("Server is Connecting  http://localhost:8080 ✅");
};

app.listen(PORT, serverListen);
