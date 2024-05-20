import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  password?: string | null;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  username?: string | null;
};
