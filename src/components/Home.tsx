'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'

import { FlipWords } from './ui/flip-words'

const Home = () => {
  const words = [
    'Desenvolvedor-Frontend',
    'Desenvolvedor-Backend',
    'Desenvolvedor-FullStack'
  ]
  return (
    <section id="section-home" className="m-auto max-w-screen-2xl">
      <div className="mx-16 my-12 flex flex-col items-center justify-center text-center sm:py-10 md:flex-row md:space-x-4 md:py-28 md:text-left">
        <div className="flex justify-center md:mt-2 md:w-1/2">
          <div className="mt-16 max-h-[21rem] max-w-[21rem] overflow-hidden rounded-full border-2 border-white shadow-2xl">
            <Image
              src="/perfil.jpeg"
              alt="logo"
              width={350}
              height={350}
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:mt-2 md:w-3/5">
          <div className="mt-6 flex flex-col space-y-6  font-bold text-neutral-200 md:mt-16 md:text-center ">
            <div>
              <span className="text-2xl md:text-3xl">Olá, eu sou wallison</span>
              <div className="flex w-full justify-center text-center text-2xl md:text-3xl">
                <FlipWords words={words} />
              </div>
            </div>
            <div>
              <span className="text-2xl md:text-3xl">
                Sou um desenvolvedor de software versátil, dedicado a criar
                soluções que tornam a vida das pessoas mais fácil. Se você
                procura alguém comprometido em transformar ideias em realidade,
                estou à disposição para colaborar.
              </span>
            </div>
            <div className="flex items-center justify-center space-x-8 text-lg sm:text-xl">
              <div className="flex justify-center text-center">
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
