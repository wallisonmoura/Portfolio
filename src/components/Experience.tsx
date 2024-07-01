import { professionalExperiences } from '@/constants/experience'

import { ExperienceIcon } from './icons'

const Experience = () => {
  return (
    <section
      id="section-experience"
      className="m-auto max-w-screen-2xl text-white"
    >
      <div className="mx-16 my-12 flex flex-col sm:py-10  md:space-x-4 md:py-28">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-10 text-2xl font-extrabold md:text-3xl  lg:text-4xl">
          <div className="flex gap-4 border-b-2 border-white drop-shadow-white-sm">
            <ExperienceIcon />
            <h2>Experiência Profissional</h2>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {professionalExperiences.map((experience, index) => (
            <div
              key={index}
              className="mb-6 space-y-4 rounded-lg bg-neutral-800 p-4 drop-shadow-blue-md"
            >
              <div className="flex flex-col gap-4 font-bold lg:flex-row lg:justify-between lg:gap-8">
                <p className="flex-1 md:text-xl">
                  {experience.position} na {experience.company}
                </p>
                <p className="text-gray-300 md:text-xl">{experience.period}</p>
              </div>
              <div>
                <ul className="list-inside list-disc space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="mb-1">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
