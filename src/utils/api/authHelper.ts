import { NextApiRequest, NextApiResponse } from "next";
import { decodeJwt } from "./jwt/decodeJwt";
/**
 * Helper function to check that the request is a GET with a valid user token
 * @param req
 * @param res
 * @returns
 */
export async function authorizedHelper(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<[valid: boolean, username?: string]> {
  if (!req.headers.authorization) {
    res.status(401).json({ message: "Unauthorized" });
    res.setHeader("Set-Cookie", "token=");
    return [false];
  } else {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      res.setHeader("Set-Cookie", "token=");
      return [false];
    } else {
      // verify the token
      const user = await decodeJwt(token);
      console.log({ user });
      if (user) {
        return [true, user.username];
      } else {
        res.status(401).json({ message: "Invalid JWT format" });
        res.setHeader("Set-Cookie", "token=");
        return [false];
      }
    }
  }
}
