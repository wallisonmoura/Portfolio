'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'

import { FlipWords } from './ui/flip-words'

const words = [
  'Desenvolvedor Frontend',
  'Desenvolvedor Backend',
  'Desenvolvedor FullStack'
]

const Home = () => {
  return (
    <section id="section-home" className="section-wrapper">
      <div className="section-content text-center lg:flex-row">
        <div className="flex h-full justify-center px-6 md:mt-2">
          <div className="relative h-[21rem] w-[21rem] overflow-hidden rounded-full border-2 border-white shadow-2xl">
            <Image src="/perfil.jpeg" alt="logo" fill priority />
          </div>
        </div>
        <div className="flex-1">
          <div className="mt-6 flex flex-col space-y-6  font-bold text-neutral-200">
            <div>
              <h1 className="text-2xl md:text-3xl">Olá, eu sou wallison</h1>
              <div className="flex w-full justify-center text-xl md:text-2xl">
                <FlipWords words={words} />
              </div>
            </div>
            <div>
              <span className="text-xl md:text-2xl">
                Sou um desenvolvedor de software versátil, dedicado a criar
                soluções que tornam a vida das pessoas mais fácil. Se você
                procura alguém comprometido em transformar ideias em realidade,
                estou à disposição para colaborar.
              </span>
            </div>
            <div className="flex items-center justify-center space-x-8 text-lg sm:text-xl">
              <div className="flex justify-center">
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-white bg-white px-2 py-0.5 text-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-200 hover:bg-gray-300 md:px-8"
                >
                  Baixar CV
                </Link>
              </div>
              <div className="flex justify-center text-center">
                <LinkScroll
                  to="section-projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer border-2 border-white bg-white px-2 py-0.5 text-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-200 hover:bg-gray-300 sm:px-8"
                >
                  Projetos
                </LinkScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
