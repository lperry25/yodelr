import { User } from "@/types/auth/User";
import jwt from "jsonwebtoken";

/**
 * Decodes a JWT token and returns the User object
 * 
 * In a production system I would extend this logic with additional jwt storage and verification
 * I should check that the token is valid for this user and not expired
 * @param token JWT token to decode
 * @returns User object
 */
export async function decodeJwt(token: string): Promise<User> {
  const jwtPayload = (await jwt.decode(token)) as User;
  return jwtPayload;
}
