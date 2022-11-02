import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import logo from 'src/assets/logo.png'

const NavbarLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <div className="flex flex-row items-center justify-between bg-white px-6 py-6 drop-shadow-sm md:px-14 lg:px-20 xl:px-52">
        <h1 className="text-2xl font-bold text-green-500">
          <Link to={routes.home()}>
            <div className="flex items-end text-xl">
              <img className="h-8" src={logo} alt="" /> - Trading Cards
            </div>
          </Link>
        </h1>
        <p>
          <Link className="hover:text-green-500" to={routes.support()}>
            Support
          </Link>
        </p>
        <div>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser?.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
      </div>
      <main className="pb-6">{children}</main>
      <div className="border-t px-6 py-12 md:px-14 lg:px-20 xl:px-52">
        VeeFriends Trading Cards - Made by{' '}
        <a
          href="https://twitter.com/hapaise"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          @hapaise
        </a>{' '}
        - Not affliated with VeeFriends
      </div>
    </>
  )
}

export default NavbarLayout
