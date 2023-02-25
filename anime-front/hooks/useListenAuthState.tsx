import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { GlobalContext } from '../context/globalStateProvider'
import { noGuardedRoutes } from '../data/noGuardedRoutes'
import { User } from '../types/User'
import { apiServer } from '../utills/axios'

export const useListenAuthState = () => {
  const global = useContext(GlobalContext)
  const router = useRouter()

  const listenAuthState = (): void => {
    apiServer
      .get('user')
      .then((res: AxiosResponse<User>) => {
        const user = res.data

        // 認証状態で認証不要ルートに遷移した場合
        if (noGuardedRoutes.includes(router.pathname)) {
          router.push('/')
        }

        global.setState({
          ...global.state,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            isSignedIn: true,
          },
        })
      })
      .catch((e: AxiosError) => {
        global.setState({
          ...global.state,
          user: {
            id: null,
            name: '',
            email: '',
            isSignedIn: false,
          },
        })

        if (noGuardedRoutes.includes(router.pathname)) {
          router.push(router.pathname)
        } else {
          router.push('/login')
        }
        console.error(e)
      })
  }

  return {
    listenAuthState,
  }
}
