import express from "express";
import path from "path";

const app = express();

app.use("/static", express.static("/public"));

app.get("/card", (req, res) => {
  const cardPath = path.join(__dirname, "./card.json");
  res.json(require(cardPath));
});

const serverListen = () => {
  console.log("Server is Connecting ✅");
};
app.listen(3000, serverListen);
