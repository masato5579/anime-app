import { ChakraProvider } from '@chakra-ui/react'

import AuthProvider from '../context/AuthProvider'
import { GlobalStateProvider } from '../context/globalStateProvider'
import theme from '../theme'

import type { AppProps } from 'next/app'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </GlobalStateProvider>
  )
}
