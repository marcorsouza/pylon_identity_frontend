import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

export const authOptions: AuthOptions = {
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        try {
          const response = await fetch("http://127.0.0.1:8000/auth/login", {
            method: "POST",
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          if (!response.ok) return null;
          const authData = await response.json();
          if (authData.access_token || !authData.user) return null;
          cookies().set("access_token", authData);
          return {
            id: authData.user.id,
            name: authData.user.name,
            email: authData.user.email,
            username: authData.user.username,
            roles: authData.user.roles,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
};
