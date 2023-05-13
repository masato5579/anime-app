import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { GlobalContext } from '../context/GlobalStateProvider'
import { Server } from '../utills/axios'

export const useHandleLogout = () => {
  const global = useContext(GlobalContext)
  const router = useRouter()
  const toast = useToast()

  return () => {
    Server.get('/sanctum/csrf-cookie').then(() => {
      Server.post('logout')
        .then(() => {
          global.setState({
            ...global.state,
            user: {
              id: null,
              name: '',
              email: '',
              isSignedIn: false,
            },
            isAuthenticated: false,
          })
          router.push('/login')
        })
        .catch(() => {
          toast({
            title: 'ログアウトに失敗しました。もう一度お試しください。',
            status: 'error',
            isClosable: true,
          })
        })
    })
  }
}
