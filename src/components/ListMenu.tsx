import CustomLink from './CustomLink'

const ListMenu = () => {
  return (
    <>
      <li className="bg-gradient-to-r from-blue-700 to-fuchsia-800 py-2 px-3 rounded-lg hover:scale-110 duration-500 hover:font-extrabold hover:border cursor-pointer">
        <CustomLink to="section-about" text="Sobre mim" />
      </li>
      <li className="bg-gradient-to-r from-blue-700 to-fuchsia-800 py-2 px-3 rounded-lg hover:scale-110 duration-500 hover:font-extrabold hover:border cursor-pointer">
        <CustomLink to="section-experience" text="Experiência" />
      </li>
      <li className="bg-gradient-to-r from-blue-700 to-fuchsia-800 py-2 px-3 rounded-lg hover:scale-110 duration-500 hover:font-extrabold hover:border cursor-pointer">
        <CustomLink to="section-skills" text="Habilidades" />
      </li>
      <li className="bg-gradient-to-r from-blue-700 to-fuchsia-800 py-2 px-3 rounded-lg hover:scale-110 duration-500 hover:font-extrabold hover:border cursor-pointer">
        <CustomLink to="section-projects" text="Projetos" />
      </li>
      <li className="bg-gradient-to-r from-blue-700 to-fuchsia-800 py-2 px-3 rounded-lg hover:scale-110 duration-500 hover:font-extrabold hover:border cursor-pointer">
        <CustomLink to="section-contact" text="Contato" />
      </li>
    </>
  )
}

export default ListMenu
