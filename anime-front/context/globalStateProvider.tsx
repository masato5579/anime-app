import { createContext, useState } from 'react'

import { GlobalState, GlobalContext as GlobalContextType } from '../types/globalState'

export const GlobalContext = createContext({} as GlobalContextType)

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

  const global = {
    state,
    setState,
  }

  return <GlobalContext.Provider value={global}>{children}</GlobalContext.Provider>
}
