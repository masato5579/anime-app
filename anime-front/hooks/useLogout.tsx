import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { GlobalContext } from '../context/globalStateProvider'
import { apiServer, Server } from '../utills/axios'

export const useHandleLogout = () => {
  const global = useContext(GlobalContext)
  const router = useRouter()
  const toast = useToast()

  return () => {
    Server.get('/sanctum/csrf-cookie').then(() => {
      apiServer
        .post('logout')
        .then(() => {
          global.setState({
            ...global.state,
            user: {
              id: null,
              name: '',
              email: '',
              isSignedIn: false,
            },
          })
          router.push('/login')
        })
        .catch((e) => {
          toast({
            title: 'ログアウトに失敗しました。もう一度お試しください。',
            status: 'error',
            isClosable: true,
          })
          console.error(e)
        })
    })
  }
}
