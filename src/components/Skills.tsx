import Card from './Card'
import {
  CssIcon,
  CypressIcon,
  DockerIcon,
  FigmaIcon,
  GitIcon,
  GithubIcon,
  GitlabIcon,
  HtmlIcon,
  JavascriptIcon,
  JestIcon,
  MongoDBIcon,
  MuiIcon,
  MySQLIcon,
  NextjsIcon,
  NodeIcon,
  NpmIcon,
  PostgreSQLIcon,
  ReactIcon,
  ReduxIcon,
  StyledComponentIcon,
  TailwindIcon,
  TypescriptIcon
} from './icons'

const Skills = () => {
  return (
    <section
      id="section-skills"
      className="flex-col items-center justify-center h-full gap-8 py-4"
    >
      <h1 className="text-4xl font-extrabold text-[#691AEA] border-b-2 border-[#691AEA]">
        Habilidades
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-4 justify-center text-center py-8">
        <Card>
          <HtmlIcon />
          <p className="flex text-white font-bold">HTML 5</p>
        </Card>
        <Card>
          <CssIcon />
          <p className="flex text-white font-bold">CSS 3</p>
        </Card>
        <Card>
          <JavascriptIcon />
          <p className="flex text-white font-bold">Javascript</p>
        </Card>
        <Card>
          <TypescriptIcon />
          <p className="flex text-white font-bold">Typescript</p>
        </Card>
        <Card>
          <NodeIcon />
          <p className="flex text-white font-bold">Node.js</p>
        </Card>
        <Card>
          <NpmIcon />
          <p className="flex text-white font-bold">NPM</p>
        </Card>
        <Card>
          <ReactIcon />
          <p className="flex text-white font-bold">React</p>
        </Card>
        <Card>
          <NextjsIcon />
          <p className="flex text-white font-bold">Next.js</p>
        </Card>
        <Card>
          <ReduxIcon />
          <p className="flex text-white font-bold">Redux</p>
        </Card>
        <Card>
          <DockerIcon />
          <p className="flex text-white font-bold">Docker</p>
        </Card>
        <Card>
          <TailwindIcon />
          <p className="flex text-white font-bold">Tailwind CSS</p>
        </Card>
        <Card>
          <MuiIcon />
          <p className="flex text-white font-bold">Material-UI</p>
        </Card>
        <Card>
          <StyledComponentIcon />
          <p className="flex text-white font-bold">Styled-Component</p>
        </Card>
        <Card>
          <JestIcon />
          <p className="flex text-white font-bold">Jest</p>
        </Card>
        <Card>
          <CypressIcon />
          <p className="flex text-white font-bold">Cypress</p>
        </Card>
        <Card>
          <MongoDBIcon />
          <p className="flex text-white font-bold">MongoDB</p>
        </Card>
        <Card>
          <MySQLIcon />
          <p className="flex text-white font-bold">Mysql</p>
        </Card>
        <Card>
          <PostgreSQLIcon />
          <p className="flex text-white font-bold">PostgreSQl</p>
        </Card>
        <Card>
          <GitIcon />
          <p className="flex text-white font-bold">Git</p>
        </Card>
        <Card>
          <GithubIcon />
          <p className="flex text-white font-bold">Github</p>
        </Card>
        <Card>
          <GitlabIcon />
          <p className="flex text-white font-bold">GitLab</p>
        </Card>
        <Card>
          <FigmaIcon />
          <p className="flex text-white font-bold">Figma</p>
        </Card>
      </div>
    </section>
  )
}

export default Skills
