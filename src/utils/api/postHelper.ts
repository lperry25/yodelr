import { NextApiRequest, NextApiResponse } from "next";

/**
 * Helper function to check if a request is a POST request and has a body
 * 
 * @param req
 * @param res
 * @returns a boolean indicating if the request is valid
 */
export function validPOST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(404).end();
    return false;
  } else if (!req.body) {
    res
      .status(500)
      .json({ message: "Request is missing body", statusCode: 500 });
    return false;
  }
  return true;
}