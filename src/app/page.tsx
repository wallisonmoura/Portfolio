import { Contact, Experience, Home, Projects, Skills } from '@/components'

export default function Page() {
  return (
    <main className="flex flex-col w-full h-full">
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
