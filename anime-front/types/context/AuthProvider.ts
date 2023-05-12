export interface AuthContextValue {
  isAuthenticated: boolean
  listenAuthState: () => void
}
