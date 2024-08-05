import express from "express";
import sequelize from "./Config/bd"
const app = express()
import cors from "cors"
import { router } from "./Routes/Router";

const corsOpt = {
    origin: "http://localhost:3006",
    methods: ["GET,POST"],
    credentials: true,
    optionsSuccessStatus: 204
}
app.use(express.json())
app.use(cors(corsOpt))
app.use("/api", router)



const startServer = async () => {
    try {
      await sequelize.authenticate();
      console.log("Database connected!");
      await sequelize.sync();
      app.listen(3005, () => {
        console.log("Server started on port 3005");
      });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  startServer();