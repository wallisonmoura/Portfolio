import { ProjectIcon } from './icons'

const Projects = () => {
  return (
    <section
      id="section-projects"
      className="flex flex-col gap-4 px-16 w-full h-screen items-center justify-center border-b-2"
    >
      <div className="flex border-b-2 border-[#691AEA] gap-4">
        <ProjectIcon />
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#691AEA] ">
          Projetos
        </h2>
      </div>
    </section>
  )
}

export default Projects
