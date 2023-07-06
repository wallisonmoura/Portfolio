import { Footer, NavBar } from '@/components'
import './globals.css'

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
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
