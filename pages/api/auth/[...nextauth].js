import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialProvider from "next-auth/providers/credentials";

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

var accessToken = null

const options = {
    providers: [
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        CredentialProvider({
            async authorize(credentials) {
                const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/login', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                })

                accessToken = null

                if (res.status == 200) {
                    var jsonResponce = await res.json();
                    // console.log('--------first-----------------')
                    // console.log(jsonResponce.token)
                    // console.log('--------first-----------------')
                    accessToken = jsonResponce.token
                    return {
                        token: jsonResponce.token,
                    };
                }

                return false;
                // Returning token to set in session

            },
        }),
    ],
    pages: {
        signIn: "/auth/sign-in",
    },
    callbacks: {
        async signIn({ account, profile }) {
            var password = generatePassword();
            switch (account.provider) {
                case "google":
                    if (profile.email_verified) {
                        accessToken = null

                        let body = {
                            key: process.env.FRONT_APP_KEY,
                            name: profile.name,
                            email: profile.email,
                            password: password,
                            password_confirmation: password
                        }

                        const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/social_register', {
                            method: 'POST',
                            body: JSON.stringify(body),
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                        })

                        if (res.status == 200) {
                            var jsonResponce = await res.json();
                            // console.log(jsonResponce.token)
                            // accessToken = jsonResponce.token
                        }
                    }
                    return profile.email_verified
                case 'facebook':
                    accessToken = null

                    var body = {
                        key: process.env.FRONT_APP_KEY,
                        name: profile.name,
                        email: profile.email,
                        password: password,
                        password_confirmation: password
                    }

                    const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/social_register', {
                        method: 'POST',
                        body: JSON.stringify(body),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                    })

                    if (res.status == 200) {
                        var jsonResponce = await res.json();
                        // console.log(jsonResponce.token)
                        accessToken = jsonResponce.token
                    }
                    
                    return true;
                // case 'github':
                //     accessToken = null

                //     var body = {
                //         key: process.env.FRONT_APP_KEY,
                //         name: profile.login,
                //         email: profile.email,
                //         password: password,
                //         password_confirmation: password
                //     }

                //     var res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/social_register', {
                //         method: 'POST',
                //         body: JSON.stringify(body),
                //         headers: {
                //             'Accept': 'application/json',
                //             'Content-Type': 'application/json'
                //         },
                //     })

                //     if (res.status == 200) {
                //         var jsonResponce = await res.json();
                //         // console.log(jsonResponce.token)
                //         accessToken = jsonResponce.token
                //     }
                    
                //     return true;

                case 'credentials': 
                    return true;
                    
                default:
                    break;
                // code block
            }
            return true // Do different verification for other providers that don't have `email_verified`
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            // console.log('--------second-----------------')
            // console.log(accessToken);
            // console.log('--------second-----------------')
            session.accessToken = accessToken
            return session
        }
    }
}

export default (req, res) => NextAuth(req, res, options)