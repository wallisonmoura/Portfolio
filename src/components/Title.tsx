import { ReactNode } from 'react'

interface TitleProps {
  title: string
  children: ReactNode
}

export function Title(props: TitleProps) {
  return (
    <div className="flex items-center justify-center gap-4 border-b-2 border-white text-2xl font-extrabold drop-shadow-white-sm  lg:text-3xl">
      {props.children}
      <h1>{props.title}</h1>
    </div>
  )
}
