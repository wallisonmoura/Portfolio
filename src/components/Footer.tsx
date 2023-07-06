import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t pb-4 flex flex-col items-center  bg-slate-600">
      <div className="mt-4">
        <h3 className="text-lg font-bold">Redes sociais</h3>
      </div>
      <div className="mt-2 flex justify-center">
        <ul className="flex space-x-2">
          <li>
            <Link href="https://www.linkedin.com/">LinkedIn</Link>
          </li>
          <li>
            <Link href="https://github.com/">GitHub</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/">Instagram</Link>
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
