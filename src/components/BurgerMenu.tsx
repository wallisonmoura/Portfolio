'use client'
import { useState } from 'react'

import { MenuIcon, XIcon } from './icons'
import ListMenu from './ListMenu'

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!isMenuOpen)

  return (
    <div className="md:hidden flex relative">
      <button
        onClick={toggleMenu}
        className={`p-2 focus:outline-none ${
          isMenuOpen ? 'z-20' : 'z-10'
        } transition-opacity`}
      >
        {isMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-1/2 bg-black bg-opacity-90 z-10 transition-opacity">
          <ul className="flex flex-col gap-4 pt-16 px-8 text-white">
            <ListMenu />
          </ul>
        </div>
      )}
    </div>
  )
}

export default BurgerMenu
