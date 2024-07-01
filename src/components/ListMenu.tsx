'use client'

import { links } from '@/constants/links'

import CustomLink from './CustomLink'

const ListMenu = () => {
  return (
    <>
      {links.map((link) => (
        <li
          key={link.hash}
          className="inset-x-0 mx-auto w-1/2 cursor-pointer rounded-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent px-3 text-white shadow-2xl transition-all duration-200 hover:border-b hover:bg-neutral-800"
        >
          <CustomLink to={link.hash} text={link.name} />
        </li>
      ))}
    </>
  )
}

export default ListMenu
