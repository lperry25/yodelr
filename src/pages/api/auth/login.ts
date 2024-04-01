import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../types/auth/User";
import { ErrorResponse } from "@/types/error/ErrorResponse";
import { users } from "@/db/users";
import { validPOST } from "@/utils/api/postHelper";
import { UserLoginPayload } from "@/types/auth/UserLoginPayload";
import { cookies } from "next/headers";

export default function login(
  req: NextApiRequest,
  res: NextApiResponse<User | ErrorResponse>
) {
  // there is only a POST endpoint for users to login against
  if (validPOST(req, res)) {
    const loginBody = JSON.parse(req.body) as UserLoginPayload;
    const { username, password } = loginBody;
    if (!username || !password) {
      res.status(500).json({ error: "Username and password are required" });
    } else {
      console.log({ users });
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (!user) {
        res.status(401).json({ error: "Invalid credentials" });
        res.setHeader("Set-Cookie", "token=");
      } else {
        res.setHeader("Set-Cookie", `token=${user.token}`);
        res.status(200).json(user);
      }
    }
  }
}