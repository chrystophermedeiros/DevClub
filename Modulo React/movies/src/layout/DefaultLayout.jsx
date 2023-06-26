import { Outlet } from 'react-router-dom'

import { Header } from '../components'

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default DefaultLayout
