import Image from 'next/image'
import Link from 'next/link'

import CustomLink from './CustomLink'

const NavBar = () => {
  return (
    <header className="fixed w-full px-9 py-6 top-0 z-10 bg-black bg-opacity-70 backdrop-filter backdrop-blur-md">
      <nav className=" w-full flex justify-between items-center ">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/Logo.png"
            alt="logo"
            width={20}
            height={20}
            className="object-contain w-auto"
          />
        </Link>
        <ul className="flex gap-5 text-white">
          <li className="bg-gradient-to-r from-[#691AEA] to-[#6C0957] py-2 px-3 rounded-lg hover:scale-110 duration-700 hover:font-extrabold cursor-pointer">
            <CustomLink to="section-about" text="Sobre mim" />
          </li>
          <li className="bg-gradient-to-r from-[#691AEA] to-[#6C0957] py-2 px-3 rounded-lg hover:scale-110 duration-700 hover:font-extrabold cursor-pointer">
            <CustomLink to="section-experience" text="Experiência" />
          </li>
          <li className="bg-gradient-to-r from-[#691AEA] to-[#6C0957] py-2 px-3 rounded-lg hover:scale-110 duration-700 hover:font-extrabold cursor-pointer">
            <CustomLink to="section-skills" text="Habilidades" />
          </li>
          <li className="bg-gradient-to-r from-[#691AEA] to-[#6C0957] py-2 px-3 rounded-lg hover:scale-110 duration-700 hover:font-extrabold cursor-pointer">
            <CustomLink to="section-projects" text="Projetos" />
          </li>
          <li className="bg-gradient-to-r from-[#691AEA] to-[#6C0957] py-2 px-3 rounded-lg hover:scale-110 duration-700 hover:font-extrabold cursor-pointer">
            <CustomLink to="section-contact" text="Contato" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
