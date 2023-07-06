import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <header className="fixed w-full top-0 z-10 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md">
      <nav className=" w-full p-4 flex justify-between items-center ">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/Logo.png"
            alt="logo"
            width={20}
            height={20}
            className="object-contain w-auto"
          />
        </Link>
        <ul className="flex space-x-4 text-white">
          <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
            <Link href="/">Página Inicial</Link>
          </li>
          <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
            <Link href="/sobre">Sobre</Link>
          </li>
          <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
            <Link href="/tecnologias">Tecnologias</Link>
          </li>
          <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
            <Link href="/contato">Projetos</Link>
          </li>
          <li className="hover:text-[#6BD425] hover:scale-110 duration-700">
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
