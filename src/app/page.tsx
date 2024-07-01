import { About, Experience, Home, Projects, Skills } from '@/components'

export default function Page() {
  return (
    // <main className="mt-8 flex h-full w-full flex-col gap-12">
    <main className="">
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </main>
  )
}
