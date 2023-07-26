import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="border-t pb-4 flex flex-col items-center bg-slate-600">
      {/* <div className="mt-4">
        <h3 className="text-lg font-bold">Redes sociais</h3>
      </div> */}
      <div className="mt-2 flex justify-center">
        <ul className="flex space-x-2 gap-3">
          <li className="flex items-center gap-1 hover:text-[#f8f8f8]">
            <Image
              src="/linkedin.svg"
              alt="logo linkedin"
              width={20}
              height={20}
              className="object-contain w-auto"
            />
            <a
              href="https://www.linkedin.com/in/wallison-moura/"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li className="flex items-center gap-1 hover:text-[#f8f8f8]">
            <Image
              src="/github.svg"
              alt="logo linkedin"
              width={20}
              height={20}
              className="object-contain w-auto"
            />

            <a
              href="https://github.com/wallisonmoura"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>

          <li className="flex items-center gap-1 hover:text-[#f8f8f8]">
            <a href="mailto:wallisonmoura.dev@gmail.com">Email</a>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <p>Todos os direitos reservados © Wallison Moura 2023</p>
      </div>
    </footer>
  )
}

export default Footer
