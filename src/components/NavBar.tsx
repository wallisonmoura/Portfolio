import Image from 'next/image'

import BurgerMenu from './BurgerMenu'
import ListMenu from './ListMenu'

const NavBar = () => {
  return (
    <header className="fixed w-full px-9 py-4 top-0 z-10 bg-black bg-opacity-70 backdrop-filter backdrop-blur-md">
      <nav className=" w-full flex justify-between items-center ">
        <div className="flex justify-center items-center">
          <Image
            src="/Logo.png"
            alt="logo"
            width={20}
            height={20}
            className="object-contain w-auto"
          />
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-5 text-white">
            <ListMenu />
          </ul>
        </div>
        <BurgerMenu />
      </nav>
    </header>
  )
}

export default NavBar
