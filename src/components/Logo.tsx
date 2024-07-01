'use client'

import Image from 'next/image'
import { Link } from 'react-scroll'

export const Logo = () => {
  return (
    <Link
      to="section-home"
      spy={true}
      smooth={true}
      duration={500}
      className="cursor-pointer"
    >
      <Image
        src="/logo.svg"
        alt="logo"
        width={196}
        height={31}
        priority
        className="w-auto object-contain"
      />
    </Link>
  )
}
