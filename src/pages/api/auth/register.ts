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
        message: "Username, password and confirm password are required",
        statusCode: 500,
      });
    } else if (password !== confirmPassword) {
      res
        .status(500)
        .json({
          message: "Password and confirm password must match",
          statusCode: 500,
        });
    } else {
      const user = users.find((u) => u.username === username);
      if (user) {
        res
          .status(500)
          .json({
            message: "A user with this username already exists",
            statusCode: 500,
          });
      } else {
        // sign a jwt token
        const token = await signJwt({ username });
        users.push({ username, token, password });
        res.setHeader("Set-Cookie", `token=${token}`);
        res.status(200).json({ token });
      }
    }
  }
}
