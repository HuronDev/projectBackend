import express from "express";
import { config } from "./shared/config/config";
import userRoutes from "./routes/userRoutes";
class Server {
  app = express();
  port = config.port;


  constructor() {
    this.initializeRoutes();
  }
   private initializeRoutes() {
    this.app.get('/', (req, res) => {
      res.send('Hello World from Detroit-Huasimpamba!');
    });

    this.app.use('/api', userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}!`);
    });
  }
}

const server = new Server();
server.listen();
