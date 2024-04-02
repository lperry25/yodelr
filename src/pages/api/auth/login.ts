import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "@/types/error/ErrorResponse";
import { users } from "@/db/users";
import { validPOST } from "@/utils/api/postHelper";
import { UserLoginPayload } from "@/types/auth/UserLoginPayload";
import { signJwt } from "@/utils/api/jwt/signJwt";
import { UserToken } from "@/types/auth/UserToken";

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<UserToken | ErrorResponse>
) {
  // there is only a POST endpoint for users to login against
  if (validPOST(req, res)) {
    const loginBody = JSON.parse(req.body) as UserLoginPayload;
    const { username, password } = loginBody;
    if (!username || !password) {
      res.status(500).json({
        message: "Username and password are required",
        statusCode: 500,
      });
    } else {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (!user) {
        res
          .status(401)
          .json({ message: "Invalid credentials", statusCode: 401 });
      } else {
        const token = await signJwt({ username });
        res.status(200).json({ token });
      }
    }
  }
}
