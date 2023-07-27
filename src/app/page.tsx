import { Contact, Experience, Home, Projects, Skills } from '@/components'

export default function Page() {
  return (
    <main className="flex flex-col items-center w-full h-full pt-16 lg:pt-0 lg:px-16">
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
