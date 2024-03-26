import { UserLoginPayload } from "./UserLoginPayload";

export interface UserRegisterPayload extends UserLoginPayload {
  confirmPassword: string;
}
