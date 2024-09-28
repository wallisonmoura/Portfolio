type CardProps = {
  children: React.ReactNode
  className?: string
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`flex flex-col rounded-md border-2 bg-slate-500 from-blue-700 to-fuchsia-800 pt-4 duration-500 hover:bg-gradient-to-r hover:shadow-md hover:shadow-white hover:duration-500 ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
