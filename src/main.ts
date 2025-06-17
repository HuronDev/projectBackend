import express from "express";

class Server {
  app = express();
  port = 3000;
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.app.get("/", (req, res) => {
      res.send("Hello World from Detroit!");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}!`);
    });
  }
}

const server = new Server();
server.listen();
