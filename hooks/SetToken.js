// Get token from session and set inside a cookeie
import React from 'react'
import { setCookie, hasCookie } from 'cookies-next';
import { useSession } from 'next-auth/react'

const SetToken = () => {
    const { data: session } = useSession();
    if (!hasCookie('accessToken') && session && session.accessToken) {
      setCookie('accessToken', session.accessToken[0]);
    }
}

export default SetToken