//api/auth/[...nextauth].ts

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import LoginService from "../../../services/authService";
import { AuthData, AuthSession } from "../../../types/AuthData";
export default NextAuth({
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

        const service = new LoginService();
        const result = await service.login(credentials);
        if (result.status === 200) {
          return result.data; // Login bem-sucedido
        } else {
          throw new Error(result.data.detail || "Login failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const props = user as AuthData;

        token.accessToken = props.access_token;
        token.expireAt = props.expire_at;
        token.user = props.user;
      }
      return token;
    },
    async session({ session, token }) {
      const props = session as AuthSession;
      props.accessToken = token.accessToken as any;
      props.expire_at = token.expireAt as any;
      props.user = token.user as any;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
    error: "/auth/login", // Error code passed in query string as ?error=
    newUser: "/auth/register",
  },
});
