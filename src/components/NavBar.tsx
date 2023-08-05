import BurgerMenu from './BurgerMenu'
import ListMenu from './ListMenu'

const NavBar = () => {
  return (
    <header className="fixed w-full px-9 py-4 top-0 z-10 bg-black bg-opacity-70 backdrop-filter backdrop-blur-md">
      <nav className=" w-full flex justify-end items-center ">
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
