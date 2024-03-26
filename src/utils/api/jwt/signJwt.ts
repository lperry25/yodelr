import { User } from "@/types/auth/User";
import jwt from "jsonwebtoken";

export async function signJwt(
  user: Omit<User, "password" | "token">
): Promise<string> {
  return jwt.sign(
    user,
    // in case the application is run missing the .env file
    // I set a default secret that is not very secret
    process.env.JWT_SECRET || "secret-that-is-not-very-secret",
    {
      expiresIn: "1h",
    }
  );
}
