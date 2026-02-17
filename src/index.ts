import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/", routes);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ error: message });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
