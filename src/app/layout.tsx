import { Jost } from 'next/font/google'

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
      <body className={jost.className}>{children}</body>
    </html>
  )
}
