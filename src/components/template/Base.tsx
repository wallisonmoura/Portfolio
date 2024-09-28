import { ReactNode } from 'react'

import Footer from './Footer'
import Header from './Header'

interface BaseProps {
  children?: ReactNode
  className?: string
}

export default function Base(props: BaseProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={`flex-1 pb-7 ${props.className}`}>{props.children}</main>
      <Footer />
    </div>
  )
}
