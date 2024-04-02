import { NextApiRequest, NextApiResponse } from "next";
import { decodeJwt } from "./jwt/decodeJwt";
/**
 * Helper function to check if a request is authorized
 * 
 * @param req
 * @param res
 * @returns an array with a validity marker and the username if valid
 */
export async function authorizedHelper(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<[valid: boolean, username?: string]> {

  if (!req.headers.authorization) {
    res
      .status(401)
      .json({ message: "Unauthorized. Missing authorization header." });
    return [false];
  } else {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Unauthorized. Missing token." });
      return [false];
    } else {
      // verify the token
      const user = await decodeJwt(token);
      if (user) {
        return [true, user.username];
      } else {
        res.status(401).json({ message: "Invalid JWT format" });
        return [false];
      }
    }
  }
}
