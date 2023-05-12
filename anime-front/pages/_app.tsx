import { ChakraProvider } from '@chakra-ui/react'

import Navbar from '../components/Navbar'
import { AuthProvider, useAuth } from '../context/AuthProvider'
import { GlobalStateProvider } from '../context/globalStateProvider'
import { useHandleLogout } from '../hooks/useLogout'
import theme from '../theme'

import type { AppProps } from 'next/app'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const handleLogout = useHandleLogout()
  const { isAuthenticated } = useAuth()

  return (
    <GlobalStateProvider>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <div>
            {isAuthenticated && <Navbar handleLogout={handleLogout} />}
            <Component {...pageProps} />
          </div>
        </AuthProvider>
      </ChakraProvider>
    </GlobalStateProvider>
  )
}
