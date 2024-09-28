import { About, Experience, Home, Projects, Skills } from '@/components'
import Base from '@/components/template/Base'

export default function Page() {
  return (
    <Base>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </Base>
  )
}
