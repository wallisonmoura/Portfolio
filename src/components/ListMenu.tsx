'use client'

import { links } from '@/constants/links'

import CustomLink from './CustomLink'

interface ListMenuProps {
  className?: string
}

const ListMenu = (props: ListMenuProps) => {
  return (
    <>
      {links.map((link) => (
        <li
          key={link.hash}
          className={`inset-x-0 flex cursor-pointer rounded-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent px-3 text-white shadow-2xl transition-all duration-200 hover:border-b hover:bg-neutral-800 ${props.className}`}
        >
          <CustomLink to={link.hash} text={link.name} />
        </li>
      ))}
    </>
  )
}

export default ListMenu
