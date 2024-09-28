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
  SkillIcon,
  StyledComponentIcon,
  TailwindIcon,
  TypescriptIcon
} from './icons'
import { Title } from './Title'

const Skills = () => {
  return (
    <section id="section-skills" className="section-wrapper text-white">
      <div className="section-content">
        <Title title="Habilidades">
          <SkillIcon />
        </Title>
        <div></div>

        <div className="grid w-full grid-cols-2 justify-between gap-4 py-8 sm:grid-cols-3 sm:justify-center md:grid-cols-4 md:text-center xl:grid-cols-7">
          <Card className="h-36 w-36 items-center justify-center">
            <HtmlIcon />
            <p className="flex font-bold text-white">HTML 5</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <CssIcon />
            <p className="flex font-bold text-white">CSS 3</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <JavascriptIcon />
            <p className="flex font-bold text-white">Javascript</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <TypescriptIcon />
            <p className="flex font-bold text-white">Typescript</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <NodeIcon />
            <p className="flex font-bold text-white">Node.js</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <NpmIcon />
            <p className="flex font-bold text-white">NPM</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <ReactIcon />
            <p className="flex font-bold text-white">React</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <NextjsIcon />
            <p className="flex font-bold text-white">Next.js</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <ReduxIcon />
            <p className="flex font-bold text-white">Redux</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <DockerIcon />
            <p className="flex font-bold text-white">Docker</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <TailwindIcon />
            <p className="flex font-bold text-white">Tailwind CSS</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <MuiIcon />
            <p className="flex font-bold text-white">Material-UI</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <StyledComponentIcon />
            <p className="flex font-bold text-white">Styled-Component</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <JestIcon />
            <p className="flex font-bold text-white">Jest</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <CypressIcon />
            <p className="flex font-bold text-white">Cypress</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <MongoDBIcon />
            <p className="flex font-bold text-white">MongoDB</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <MySQLIcon />
            <p className="flex font-bold text-white">Mysql</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <PostgreSQLIcon />
            <p className="flex font-bold text-white">PostgreSQl</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <GitIcon />
            <p className="flex font-bold text-white">Git</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <GithubIcon />
            <p className="flex font-bold text-white">Github</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <GitlabIcon />
            <p className="flex font-bold text-white">GitLab</p>
          </Card>
          <Card className="h-36 w-36 items-center justify-center">
            <FigmaIcon />
            <p className="flex font-bold text-white">Figma</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Skills
