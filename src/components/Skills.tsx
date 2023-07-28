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

const Skills = () => {
  return (
    <section
      id="section-skills"
      className="flex-col items-center justify-center h-full gap-8 py-4"
    >
      <div className="flex border-b-2 border-[#691AEA] gap-4">
        <SkillIcon />
        <h2>Habilidades</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-4 justify-center text-center py-8">
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <HtmlIcon />
          <p className="flex text-white font-bold">HTML 5</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <CssIcon />
          <p className="flex text-white font-bold">CSS 3</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <JavascriptIcon />
          <p className="flex text-white font-bold">Javascript</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <TypescriptIcon />
          <p className="flex text-white font-bold">Typescript</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <NodeIcon />
          <p className="flex text-white font-bold">Node.js</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <NpmIcon />
          <p className="flex text-white font-bold">NPM</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <ReactIcon />
          <p className="flex text-white font-bold">React</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <NextjsIcon />
          <p className="flex text-white font-bold">Next.js</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <ReduxIcon />
          <p className="flex text-white font-bold">Redux</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <DockerIcon />
          <p className="flex text-white font-bold">Docker</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <TailwindIcon />
          <p className="flex text-white font-bold">Tailwind CSS</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <MuiIcon />
          <p className="flex text-white font-bold">Material-UI</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <StyledComponentIcon />
          <p className="flex text-white font-bold">Styled-Component</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <JestIcon />
          <p className="flex text-white font-bold">Jest</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <CypressIcon />
          <p className="flex text-white font-bold">Cypress</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <MongoDBIcon />
          <p className="flex text-white font-bold">MongoDB</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <MySQLIcon />
          <p className="flex text-white font-bold">Mysql</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <PostgreSQLIcon />
          <p className="flex text-white font-bold">PostgreSQl</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <GitIcon />
          <p className="flex text-white font-bold">Git</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <GithubIcon />
          <p className="flex text-white font-bold">Github</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <GitlabIcon />
          <p className="flex text-white font-bold">GitLab</p>
        </Card>
        <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
          <FigmaIcon />
          <p className="flex text-white font-bold">Figma</p>
        </Card>
      </div>
    </section>
  )
}

export default Skills
