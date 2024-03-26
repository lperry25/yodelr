import { Router, Request, Response } from "express";

const router: Router = Router();

// Placeholder for POST /posts
router.post("/posts", (req: Request, res: Response) => {
  res.status(501).send("Endpoint not implemented yet");
});

// Placeholder for GET /posts
router.get("/posts", (req: Request, res: Response) => {
  res.status(501).send("Endpoint not implemented yet");
});

// Placeholder for GET /posts/topic/{topic}
router.get("/posts/topic/:topic", (req: Request, res: Response) => {
  res.status(501).send("Endpoint not implemented yet");
});

export default router;
