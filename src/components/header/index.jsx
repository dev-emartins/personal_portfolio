import { useRef, useEffect, useState } from "react"
import { FaBars, FaCircleXmark, FaMoon, FaSun } from "react-icons/fa6"
import { Link, NavLink } from "react-router-dom"
import Logo from "./Logo"

function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portTheme') || 'dark')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('portTheme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const menu_itens = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className='w-full p-5 flex justify-center items-center'>
      <nav className='w-full'>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-(--accent)">
            <Logo />
          </Link>

          {/* Menu para desktop */}
          <div className="hidden md:flex md:space-x-4 items-center">
            {menu_itens.map(item => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => isActive ? 'text-(--accent)' : 'hover:text-cyan-500'}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Botão de tema */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-3xl bg-(--accent) cursor-pointer"
            >
              {theme === 'dark' 
                ? <FaMoon className='align-text-top text-base text-blue-50 transition-colors hover:rotate-22 duration-300' /> 
                : <FaSun className='align-text-top text-base text-blue-50 transition-colors hover:rotate-22 duration-300' />
              }
            </button>
          </div>

          {/* Botão do menu mobile */}
          <button
            className="md:hidden text-(--accent) focus:text-cyan-600 cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaCircleXmark className='text-2xl' /> : <FaBars className='text-2xl' />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div ref={ menuRef } className="md:hidden w-full absolute left-0 z-50 px-5 py-3 shadow-lg">
            <div className="bg-(--background) flex flex-col justify-center items-center gap-5">
              {menu_itens.map(item => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => isActive ? 'text-(--accent) py-2 text-center text-xl' : 'hover:text-cyan-500 py-2 text-center text-xl'}
                  onClick={toggleMenu}
                >
                  {item.name}
                </NavLink>
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center p-3 hover:text-cyan-500 transition-colors cursor-pointer"
              >
                {theme === 'dark' ? (
                  <>
                    <FaMoon className='mr-2' /> Dark Mode
                  </>
                ) : (
                  <>
                    <FaSun className='mr-2' /> Light Mode
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header