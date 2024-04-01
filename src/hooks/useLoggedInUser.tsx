import { User } from "@/types/auth/User";
import { decodeJwt } from "@/utils/api/jwt/decodeJwt";
import { useEffect, useState } from "react";

export function useLoggedInUser() {
  const [loggedInUser, setLoggedInUser] = useState<string>("");
  useEffect(() => {
    if (!loggedInUser) {
      const token = localStorage.getItem("token");
      if (token) {
        decodeJwt(token).then((user: User) => {
          if (user) {
            setLoggedInUser(user.username);
          }
        });
      }
    }
  }),
    [loggedInUser];

  return loggedInUser;
}
