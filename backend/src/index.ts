import express, { Express, Request, Response } from "express";
import posts from "./posts";
import auth from "./auth";

const app: Express = express();

app.use(express.json());
app.use(posts);
app.use(auth);

app.get("/", (req: Request, res: Response) => {
  res.send("Yodelr backend is running!");
});

const PORT: string | number = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
