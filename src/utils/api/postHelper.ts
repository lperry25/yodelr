import { NextApiRequest, NextApiResponse } from "next";

export function validPOST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(404).end();
    return false;
  } else if (!req.body) {
    res.status(500).json({ error: "Request is missing body" });
    return false;
  }
  return true;
}