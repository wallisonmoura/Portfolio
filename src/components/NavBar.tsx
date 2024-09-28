import BurgerMenu from './BurgerMenu'
import ListMenu from './ListMenu'

const NavBar = () => {
  return (
    <header className="fixed top-0 z-10 w-full bg-black bg-opacity-70 px-9 py-4">
      <nav className=" flex w-full items-center justify-end ">
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
