type CardProps = {
  children: React.ReactNode
  containerStyle?: string
}

const Card = ({ children, containerStyle }: CardProps) => {
  return (
    <div
      className={`flex flex-col pt-4 rounded-md bg-slate-500 border-2 hover:bg-gradient-to-r from-blue-700 to-fuchsia-800 hover:shadow-md hover:shadow-white duration-500 hover:duration-500 ${containerStyle}`}
    >
      {children}
    </div>
  )
}

export default Card
