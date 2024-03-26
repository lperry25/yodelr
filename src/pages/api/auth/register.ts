import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "@/types/error/ErrorResponse";
import { users } from "@/db/users";
import { validPOST } from "@/utils/api/postHelper";
import { UserRegisterPayload } from "@/types/auth/UserRegisterPayload";
import { UserToken } from "@/types/auth/UserToken";
import { signJwt } from "@/utils/api/jwt/signJwt";

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<UserToken | ErrorResponse>
) {
  // there is only a POST endpoint for users to register against
  if (validPOST(req, res)) {
    const registerBody = JSON.parse(req.body) as UserRegisterPayload;
    const { username, password, confirmPassword } = registerBody;
    if (!username || !password || !confirmPassword) {
      res.status(500).json({
        error: "Username, password and confirm password are required",
      });
    } else if (password !== confirmPassword) {
      res
        .status(500)
        .json({ error: "Password and confirm password must match" });
    } else {
      const user = users.find((u) => u.username === username);
      if (user) {
        res
          .status(500)
          .json({ error: "A user with this username already exists" });
      } else {
        // sign a jwt token
        const token = await signJwt({ username });
        users.push({ username, token, password });
        res.status(200).json({ token });
      }
    }
  }
}
