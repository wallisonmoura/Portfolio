import Card from './Card'
import { FlagIcon, ProjectIcon } from './icons'

type RepoProps = {
  id: number
  name: string
  html_url: string
  description: string
  topics: []
}

export default async function Projects() {
  const response = await fetch(`${process.env.NEXT_PULIC_API_GITHUB}/repos`)
  const repos = await response.json()

  const reposToRender = [
    'won-games',
    'car_showcase',
    'ddd_modelagem_tatica_e_patterns',
    'sistema-de-consulta',
    'won-games-api',
    'won-games-database'
  ]

  return (
    <section
      id="section-projects"
      className="flex-col items-center justify-center h-full gap-8 py-4"
    >
      <div className="flex border-b-2 border-blue-700 gap-4 drop-shadow-white-sm">
        <ProjectIcon />
        <h2>Projetos</h2>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 px-4 gap-4 text-center py-8">
        {repos
          .filter((repo: RepoProps) => reposToRender.includes(repo.name))
          .map((repo: RepoProps) => (
            <div key={repo.id}>
              <a href={repo.html_url} rel="noreferrer" target="_blank">
                <Card containerStyle="w-full md:h-full justify-between text-white">
                  <div className="flex gap-4 items-center pl-2">
                    <FlagIcon />
                    <p className="flex flex-wrap text-left font-bold text-xl">
                      {repo.name.replace(/[_-]/g, ' ')}
                    </p>
                  </div>
                  <p className="flex w-full text-left p-2">
                    {repo.description}
                  </p>
                  <div className="flex flex-wrap gap-2 p-2">
                    {repo.topics.map((topic) => (
                      <p
                        key={topic}
                        className="bg-[#460ca3] opacity-70 rounded-lg p-2 text-xs"
                      >
                        {topic}
                      </p>
                    ))}
                  </div>
                </Card>
              </a>
            </div>
          ))}
      </div>
    </section>
  )
}
