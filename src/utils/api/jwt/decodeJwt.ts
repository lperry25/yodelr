import { User } from "@/types/auth/User";
import jwt from "jsonwebtoken";

export async function decodeJwt(token: string): Promise<User> {
  const jwtPayload = (await jwt.decode(token)) as User;
  return jwtPayload;
}
