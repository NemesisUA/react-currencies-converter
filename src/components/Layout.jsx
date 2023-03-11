import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Header />

        <Outlet></Outlet>

        <Footer />
    </>
  )
}

export default Layout