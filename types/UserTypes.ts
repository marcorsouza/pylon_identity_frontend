import { DateTime } from "luxon";

interface RolePublic {
  id: number;
  name: string;
  // Adicione outras propriedades, se necessário
}

interface UserSchema {
  name: string;
  email: string;
  username: string;
  password: string;
}

interface UserPublic {
  id: number;
  name: string;
  email: string;
  username: string;
  is_locked_out: boolean;
  creation_date: string;
  last_login_date?: string | null;
  last_change?: string | null;
  roles: RolePublic[];
}

interface UserUpdate {
  name: string;
  is_locked_out: boolean;
}

interface UserList {
  users: UserPublic[];
}

interface UserPagedList {
  data: UserPublic[];
  total_records: number;
}

interface TokenAndUserPublic {
  access_token: string;
  token_type: string;
  expire_at: DateTime;
  user: UserPublic;
}

interface UserStoreProps {
  users: UserPublic[];
  fetchUsers: (token: string) => Promise<void>;
  createUser: (user: UserSchema, token: string) => Promise<void>;
  updateUser: (id: number, user: UserUpdate, token: string) => Promise<void>;
  deleteUser: (id: number, token: string) => Promise<void>;
}

export type {
  UserSchema,
  RolePublic,
  UserPublic,
  UserUpdate,
  UserList,
  UserPagedList,
  TokenAndUserPublic,
  UserStoreProps,
};
