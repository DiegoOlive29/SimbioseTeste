import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use("/pessoa", userRoutes);

export default app;
