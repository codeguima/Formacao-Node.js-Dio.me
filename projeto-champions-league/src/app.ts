import express from "express";
import router from "./routes";
import cors from "cors";

function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", router);

  const port = process.env.PORT;

  const corsOptions = {
    origin: `http://localhost:${port}`,
    methods: ["GET", "UPDATE", "DELETE", "POST"],
  };

  app.use(cors());

  return app;
}

export default createApp;