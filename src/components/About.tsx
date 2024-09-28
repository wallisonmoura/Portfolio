import { about } from '@/constants/about'
import { competences } from '@/constants/competence'

import { AboutIcon } from './icons'
import { Title } from './Title'

const About = () => {
  return (
    <section id="section-about" className="section-wrapper text-white">
      <div className="section-content">
        <Title title="Sobre mim">
          <AboutIcon />
        </Title>
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="drop-shadow-white-md space-y-8 rounded-lg bg-neutral-800 p-4 text-center md:text-start lg:w-1/2">
            <h2 className="text-xl font-semibold">Um pouco mais sobre mim:</h2>
            <div className="flex flex-col gap-4">
              {about.map((p, index) => (
                <p key={index} className="text-justify indent-8">
                  {p.paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="drop-shadow-white-md space-y-8 rounded-lg bg-neutral-800 p-4 lg:w-1/2">
            <h2 className="text-xl font-semibold">
              Em termos de competências pessoais, caracterizo-me por:
            </h2>
            <div>
              <ul className="list-inside list-disc space-y-2 text-justify">
                {competences.map((list, index) => (
                  <li key={index}>{list.paragraph}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
