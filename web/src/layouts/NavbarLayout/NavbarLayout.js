import { Link, routes } from '@redwoodjs/router'

import logo from 'src/assets/logo.png'

const NavbarLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-white px-52 py-6 drop-shadow-sm">
        <h1 className="text-2xl font-bold text-green-500">
          <Link to={routes.home()}>
            <div className="flex items-end text-xl">
              <img className="h-8" src={logo} alt="" /> - Trading Cards
            </div>
          </Link>
        </h1>
        <p>
          <Link to={routes.support()}>Support</Link>
        </p>
      </div>
      <main>{children}</main>
    </>
  )
}

export default NavbarLayout
