/**
 * For demo purposes I am using only memory for user storage
 * I would not do this if this was a production application
 */

import { User } from "@/types/auth/User";

export let users: User[] = [
  { username: "test-user", token: "1234-f", password: "password" },
];
