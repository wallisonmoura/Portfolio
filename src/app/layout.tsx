import { Jost } from 'next/font/google'

import { Footer } from '@/components'
import 'react-toastify/dist/ReactToastify.min.css'
import './globals.css'
import { Header } from '@/components/Header'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'Wallison Moura',
  description: 'portfólio criado com nextjs'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      {/* <body className={jost.className}>
        <ToastContainer />
        <NavBar />
        <div className="flex h-full w-full px-5 md:px-10 lg:px-20">
          {children}
        </div>
        <Footer />
      </body> */}
      <body className={jost.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
