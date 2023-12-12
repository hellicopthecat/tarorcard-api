import express from "express";
import path from "path";
import cors from "cors";
import {readFileSync} from "fs";
const PORT = 8080;
const app = express();
const __dirname = path.resolve();

app.use(cors());

app.use("/static", express.static("/public"));

app.get("/", (req, res) => {
  res.send("Read README.md");
});
app.get("/card/major", (req, res) => {
  const majorCardPath = path.join(__dirname, "./src/cards/major_card.json");
  const jsonData = readFileSync(majorCardPath, "utf-8");
  res.json(JSON.parse(jsonData));
});
app.get("/card/minor/cups", (req, res) => {
  const cupsCardPath = path.join(__dirname, "./src/cards/minor_cups.json");
  const jsonData = readFileSync(cupsCardPath, "utf-8");
  res.json(JSON.parse(jsonData));
});
app.get("/card/minor/sword", (req, res) => {
  const swordCardPath = path.join(__dirname, "./src/cards/minor_sword.json");
  const jsonData = readFileSync(swordCardPath, "utf-8");
  res.json(JSON.parse(jsonData));
});
app.get("/card/minor/wand", (req, res) => {
  const wandCardPath = path.join(__dirname, "./src/cards/minor_wand.json");
  const jsonData = readFileSync(wandCardPath, "utf-8");
  res.json(JSON.parse(jsonData));
});
app.get("/card/minor/pentacle", (req, res) => {
  const pentacleCardPath = path.join(
    __dirname,
    "./src/cards/minor_pentacle.json"
  );
  const jsonData = readFileSync(pentacleCardPath, "utf-8");
  res.json(JSON.parse(jsonData));
});
const serverListen = () => {
  console.log("Server is Connecting  http://localhost:8080 ✅");
};

app.listen(PORT, serverListen);
