import { createContext, ReactElement, useContext, useEffect } from 'react'

import { useListenAuthState } from '../hooks/useListenAuthState'
import { AuthContextValue } from '../types/context/AuthProvider'

// 認証コンテキストの作成
const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

export const AuthProvider = ({ children }: { children: ReactElement<object> }) => {
  const { listenAuthState, isAuthenticated } = useListenAuthState()

  // コンテキストの値
  const authContextValue = {
    isAuthenticated,
    listenAuthState,
  }

  useEffect(() => {
    listenAuthState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}

// カスタムフック: AuthContextの値を使用するためのフック
export const useAuth = () => useContext(AuthContext)
