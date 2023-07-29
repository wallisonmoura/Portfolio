import { Jost } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

import { Footer, NavBar } from '@/components'
import 'react-toastify/dist/ReactToastify.min.css'
import './globals.css'

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
      <body className={jost.className}>
        <NavBar />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  )
}
