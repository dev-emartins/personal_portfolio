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
    <header className='w-full px-5 py-3 flex justify-center items-center'>
      <nav className='w-full'>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>

          {/* Menu para desktop */}
          <div className="hidden py-3 md:flex items-center gap-4">
            {menu_itens.map(item => (
              <NavLink
                key={item.name}
                to={item.path}
                className="hover:text-(--foreground)/60"
              >
                {item.name}
              </NavLink>
            ))}            
          </div>
          <div className="flex items-center gap-5">
            {/* Botão de tema */}
            <button
              onClick={toggleTheme}
              className="p-2 text-xl rounded-full transition-colors hover:bg-(--foreground)/20 cursor-pointer"
            >
              {theme === 'dark' 
                ? <FaMoon /> 
                : <FaSun />
              }
            </button>

            {/* Botão do menu mobile */}
            <button
              className="md:hidden text-(--accent) cursor-pointer"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaCircleXmark className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>
          </div>          
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div ref={ menuRef } className="bg-(--background) md:hidden w-full absolute left-0 z-50 px-5 py-3 shadow-lg">
            <div className="flex flex-col justify-center items-center gap-5">
              {menu_itens.map(item => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="hover:text-(--foreground)/60"
                  onClick={toggleMenu}
                >
                  {item.name}
                </NavLink>
              ))}              
            </div>
          </div>
        )}          
      </nav>
    </header>
  )
}

export default Header