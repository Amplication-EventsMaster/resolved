import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  password?: string | null;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
