'use client'

import { Link } from 'react-scroll'

interface CustomLinkProps {
  to: string
  text: string
}

const CustomLink = ({ to, text }: CustomLinkProps) => {
  return (
    <Link to={to} spy={true} smooth={true} duration={500}>
      {text}
    </Link>
  )
}

export default CustomLink
