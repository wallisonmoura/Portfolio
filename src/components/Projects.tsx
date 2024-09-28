import Card from './Card'
import { FlagIcon, ProjectIcon } from './icons'
import { Title } from './Title'

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
    <section id="section-projects" className="section-wrapper text-white">
      <div className="section-content">
        <Title title="Projetos">
          <ProjectIcon />
        </Title>

        <div className="grid grid-cols-1 gap-4 px-4 py-8 text-center xl:grid-cols-2">
          {repos
            .filter((repo: RepoProps) => reposToRender.includes(repo.name))
            .map((repo: RepoProps) => (
              <div key={repo.id}>
                <a href={repo.html_url} rel="noreferrer" target="_blank">
                  <Card className="w-full justify-between text-white md:h-full">
                    <div className="flex items-center gap-4 pl-2">
                      <FlagIcon />
                      <p className="flex flex-wrap text-left text-xl font-bold">
                        {repo.name.replace(/[_-]/g, ' ')}
                      </p>
                    </div>
                    <p className="flex w-full p-2 text-left">
                      {repo.description}
                    </p>
                    <div className="flex flex-wrap gap-2 p-2">
                      {repo.topics.map((topic) => (
                        <p
                          key={topic}
                          className="rounded-lg bg-[#460ca3] p-2 text-xs opacity-70"
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
      </div>
    </section>
  )
}
