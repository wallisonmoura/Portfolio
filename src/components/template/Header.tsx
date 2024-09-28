import BurgerMenu from '../BurgerMenu'
import ListMenu from '../ListMenu'
import { Logo } from '../Logo'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 mx-auto h-20 w-full border-b border-white bg-black px-4 py-5 md:px-10 lg:px-20">
      <div className="hidden items-center justify-between text-white md:flex">
        <Logo />
        <nav>
          <ul className="flex items-center space-x-3">
            <ListMenu className="mx-auto w-1/2" />
          </ul>
        </nav>
      </div>
      <BurgerMenu />
    </header>
  )
}
