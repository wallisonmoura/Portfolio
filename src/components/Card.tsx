type CardProps = {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="flex flex-col justify-center items-center pt-4 w-[130px] h-[130px] rounded-md bg-slate-500 border-2 hover:bg-[#691AEA] hover:shadow-md hover:shadow-white hover:scale-105 duration-500 hover:duration-500 transition-all hover:transition-all">
      {children}
    </div>
  )
}

export default Card
