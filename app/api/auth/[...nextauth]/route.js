import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { connectDb } from "@utils/database";


const handler = NextAuth({

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session() {

    },
    async signin() {

    }
})

export default handler;