import { DefaultSession, DefaultUser } from "next-auth";

export interface AuthUser {
  username: string;
  password: string;
}

interface ApplicationData {
  id: number;
  name: string;
  acronym: string;
  creation_date: string;
}

interface ActionData {
  id: number;
  name: string;
  task_id: number;
}

interface RoleData {
  id: number;
  name: string;
  application: ApplicationData;
  actions: ActionData[];
}

export interface AuthUserData {
  id: number;
  name: string;
  email: string;
  username: string;
  is_locked_out: boolean;
  creation_date: string;
  last_login_date: string;
  last_change: string | null;
  roles: RoleData[]; // Supondo que roles seja um array de strings
}

export interface AuthData extends DefaultUser {
  access_token: string;
  token_type: string;
  expire_at: string;
  user: AuthUserData;
}

export interface AuthSession extends DefaultSession {
  accessToken: string;
  expire_at: string;
  user: AuthUserData;
}
