import { ReactElement, useEffect } from 'react'

import { useListenAuthState } from '../hooks/useListenAuthState'

const AuthProvider = ({ children }: { children: ReactElement<object> }) => {
  const { listenAuthState } = useListenAuthState()

  useEffect(() => {
    listenAuthState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return children
}

export default AuthProvider
