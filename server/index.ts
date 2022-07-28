import express from "express";

const app = express();
const port: any = 8000 || process.env.PORT;

async () => {
  if (process.env.ENVIROMENT === "development") {
    //development
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.listen(port!, "127.0.0.1", () => {
      console.log(`Server app listing to port: http://localhost:${port}`);
    });
  } else {
    //production
  }
};
