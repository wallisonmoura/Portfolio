import { professionalExperiences } from '@/constants/experience'

import { ExperienceIcon } from './icons'
import { Title } from './Title'

const Experience = () => {
  return (
    <section id="section-experience" className="section-wrapper text-white">
      <div className="section-content">
        <Title title="Experiência Profissional">
          <ExperienceIcon />
        </Title>
        <div className="flex flex-col gap-6">
          {professionalExperiences.map((experience, index) => (
            <div
              key={index}
              className="mb-6 space-y-4 rounded-lg bg-neutral-800 p-4 drop-shadow-white-md"
            >
              <div className="flex flex-col gap-4 font-bold lg:flex-row lg:justify-between lg:gap-8">
                <p className="flex-1 md:text-xl">
                  {experience.position} na {experience.company}
                </p>
                <p className="text-gray-300 md:text-xl">{experience.period}</p>
              </div>

              {/* Responsabilidades */}
              <div>
                <h4 className="text-lg font-bold">Responsabilidades:</h4>
                <ul className="list-inside list-disc space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="mb-1">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resultados */}
              {experience.results && (
                <div>
                  <h4 className="text-lg font-bold">Resultados:</h4>
                  <ul className="list-inside list-disc space-y-2">
                    {experience.results.map((result, idx) => (
                      <li key={idx} className="mb-1">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stacks */}
              {experience.stacks && (
                <div>
                  <h4 className="text-lg font-bold">Stacks utilizadas:</h4>
                  <ul className="list-inside list-disc space-y-2">
                    <li className="mb-1">{experience.stacks}</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
