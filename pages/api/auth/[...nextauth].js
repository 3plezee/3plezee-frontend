import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import GoogleProvider from "next-auth/providers/google";
import { API_URL } from "../../../utils/data";
export const authOptions = {
  // secret: process.env.SESSION_SECRET,
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // 24 hours
  },
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId:
        "184157599268-cuq0a8d7p7j7iuom22valcsi2bh339da.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id_token = account.id_token;
      }

      const apiRes = await fetch(
        `${API_URL}/authenticator/dj-rest-auth/google/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify({
            access_token: token.id_token, // note the differences in key and value variable names
            id_token: token.accessToken,
          }),
        }
      );

      // console.log("res", apiRes)
      const response = await apiRes.json();
      // console.log("lo", response)

      // extract the returned token from the DRF backend and add it to the `user` object
      const { access_token, refresh_token } = response;
      // reform the `token` object from the access token we appended to the `user` object
      token = {
        ...token,
        accessToken: access_token,
        refreshToken: refresh_token,
      };

      // console.log("fin token", token)
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      return session;
    },
  },
};
export default NextAuth(authOptions);
