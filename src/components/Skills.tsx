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
    <section id="section-skills" className="m-auto max-w-screen-2xl text-white">
      <div className="mx-16 my-12 flex flex-col sm:py-10  md:space-x-4 md:py-28">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-10 text-2xl font-extrabold md:text-3xl  lg:text-4xl">
          <div className="flex gap-4 border-b-2 border-white drop-shadow-white-sm">
            <SkillIcon />
            <h2>Habilidades</h2>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 justify-between gap-4 py-8 sm:grid-cols-3 sm:justify-center md:grid-cols-4 md:text-center xl:grid-cols-7">
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <HtmlIcon />
            <p className="flex font-bold text-white">HTML 5</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <CssIcon />
            <p className="flex font-bold text-white">CSS 3</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <JavascriptIcon />
            <p className="flex font-bold text-white">Javascript</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <TypescriptIcon />
            <p className="flex font-bold text-white">Typescript</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <NodeIcon />
            <p className="flex font-bold text-white">Node.js</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <NpmIcon />
            <p className="flex font-bold text-white">NPM</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <ReactIcon />
            <p className="flex font-bold text-white">React</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <NextjsIcon />
            <p className="flex font-bold text-white">Next.js</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <ReduxIcon />
            <p className="flex font-bold text-white">Redux</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <DockerIcon />
            <p className="flex font-bold text-white">Docker</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <TailwindIcon />
            <p className="flex font-bold text-white">Tailwind CSS</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <MuiIcon />
            <p className="flex font-bold text-white">Material-UI</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <StyledComponentIcon />
            <p className="flex font-bold text-white">Styled-Component</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <JestIcon />
            <p className="flex font-bold text-white">Jest</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <CypressIcon />
            <p className="flex font-bold text-white">Cypress</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <MongoDBIcon />
            <p className="flex font-bold text-white">MongoDB</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <MySQLIcon />
            <p className="flex font-bold text-white">Mysql</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <PostgreSQLIcon />
            <p className="flex font-bold text-white">PostgreSQl</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <GitIcon />
            <p className="flex font-bold text-white">Git</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <GithubIcon />
            <p className="flex font-bold text-white">Github</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <GitlabIcon />
            <p className="flex font-bold text-white">GitLab</p>
          </Card>
          <Card containerStyle="w-[130px] h-[130px] justify-center items-center">
            <FigmaIcon />
            <p className="flex font-bold text-white">Figma</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Skills
