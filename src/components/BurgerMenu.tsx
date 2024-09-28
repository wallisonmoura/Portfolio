'use client'
import { useEffect, useRef, useState } from 'react'

import { MenuIcon, XIcon } from './icons'
import ListMenu from './ListMenu'

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setMenuOpen(!isMenuOpen)

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <div className="relative flex md:hidden" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className={`p-2 focus:outline-none ${
          isMenuOpen ? 'z-20' : 'z-10'
        } transition-opacity`}
      >
        {isMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>
      {isMenuOpen && (
        <div className="fixed left-0 top-0 z-10 h-screen w-1/2 bg-black bg-opacity-90 transition-opacity">
          <ul className="flex flex-col gap-4 p-4 pt-16 text-white">
            <ListMenu className="pl-2" />
          </ul>
        </div>
      )}
    </div>
  )
}

export default BurgerMenu
