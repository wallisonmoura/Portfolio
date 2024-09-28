import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse items-center border-t pb-4 text-white md:mx-20 md:flex-row md:justify-between">
      <div className="mt-4">
        <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
      </div>
      <div className="mt-2 flex justify-center">
        <ul className="flex gap-3 space-x-2">
          <li className="flex items-center gap-2 hover:text-gray-300">
            <Image
              src="/linkedin.svg"
              alt="logo linkedin"
              width={20}
              height={20}
              className="w-auto object-contain"
            />
            <a
              href="https://www.linkedin.com/in/wallison-moura/"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li className="flex items-center gap-2 hover:text-gray-300">
            <Image
              src="/github.svg"
              alt="logo linkedin"
              width={20}
              height={20}
              className="w-auto object-contain"
            />

            <a
              href="https://github.com/wallisonmoura"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
