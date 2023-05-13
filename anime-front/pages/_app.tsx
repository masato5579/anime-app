import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/Layout'
import { AuthProvider } from '../context/AuthProvider'
import { GlobalStateProvider } from '../context/GlobalStateProvider'
import theme from '../theme'

import type { AppProps } from 'next/app'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ChakraProvider>
    </GlobalStateProvider>
  )
}
