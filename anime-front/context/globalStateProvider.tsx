import { createContext, Dispatch, SetStateAction, useState } from 'react'

import { GlobalState } from '../types/globalState'

export const GlobalContext = createContext(
  {} as {
    state: GlobalState
    setState: Dispatch<SetStateAction<GlobalState>>
  },
)

export const GlobalStateProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  // グローバルステート
  const [state, setState] = useState<GlobalState>({
    user: {
      id: null,
      name: null,
      email: null,
      isSignedIn: false,
    },
  })

  // 状態と関数をオブジェクトにラップして、プロバイダーに引き渡す
  const global = {
    state,
    setState,
  }

  return <GlobalContext.Provider value={global}>{children}</GlobalContext.Provider>
}
