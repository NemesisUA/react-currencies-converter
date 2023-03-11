import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Header />
        <main>
          <div className="wrapper">
            <Outlet></Outlet>
          </div>
        </main>
        <Footer />
    </>
  )
}

export default Layout