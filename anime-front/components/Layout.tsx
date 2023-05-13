import { useContext } from 'react'

import { GlobalContext } from '../context/GlobalStateProvider'
import { useHandleLogout } from '../hooks/useLogout'
import { Props } from '../types/components/Layout'

import Navbar from './Navbar'

const Layout = (props: Props) => {
  const handleLogout = useHandleLogout()
  const global = useContext(GlobalContext)

  return (
    <div>
      {global.state.isAuthenticated && <Navbar handleLogout={handleLogout} />}
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
