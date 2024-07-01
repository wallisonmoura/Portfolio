import { AboutIcon } from './icons'

const About = () => {
  return (
    <section id="section-about" className="m-auto max-w-screen-2xl text-white">
      <div className="mx-16 my-12 flex flex-col sm:py-10 md:space-x-4 md:py-28">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-10 text-3xl font-extrabold  lg:text-4xl">
          <div className="flex gap-4 border-b-2 border-white drop-shadow-white-sm">
            <AboutIcon />
            <h1>Sobre mim</h1>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="space-y-8 rounded-lg bg-neutral-800 p-4 text-center drop-shadow-blue-md md:text-start lg:w-1/2">
            <h2 className="text-xl font-semibold">Um pouco mais sobre mim:</h2>
            <div className="">
              <p className="text-justify">
                Apaixonado por programação / desenvolvimento de sistema desde
                2018, formado em Análise e Desenvolvimento de Sistemas pela
                Faculdade Católica Imaculada Conceição do Recife. Sou uma pessoa
                que adora desafios, assim como todo desenvolvedor, mas em
                especial aqueles que me tiram da minha zona de conforto, pois as
                minhas maiores evoluções e aprendizados vierem de momentos em
                que me vi obrigada a sair dela e enfrentar a vida. Tenho mais de
                3 anos de experiência profissional. Estudante assíduo, que
                sempre busca aprimorar cada vez mais minhas habilidades técnicas
                e interpessoais.
              </p>
            </div>
          </div>
          <div className="space-y-8 rounded-lg bg-neutral-800 p-4 drop-shadow-blue-md lg:w-1/2">
            <h2 className="text-xl font-semibold">
              Em termos de competências pessoais, caracterizo-me por:
            </h2>
            <div className="">
              <ul className="list-inside list-disc space-y-2 text-justify">
                <li>
                  Adaptabilidade: Capacidade de se ajustar a novos ambientes,
                  tecnologias e demandas de projetos.
                </li>
                <li>
                  Trabalho em equipe: Colaboração eficaz com membros da equipe
                  para alcançar objetivos comuns.
                </li>
                <li>
                  Resolução de problemas: Habilidade de identificar questões
                  complexas e encontrar soluções eficientes.
                </li>
                <li>
                  Pensamento crítico: Capacidade de analisar informações de
                  forma objetiva e formular decisões fundamentadas.
                </li>
                <li>
                  Planejamento e organização: Competência em gerenciar tempo e
                  recursos para atingir metas estabelecidas.
                </li>
                <li>
                  Comunicação eficaz: Habilidade de transmitir ideias de forma
                  clara e concisa, facilitando a colaboração e entendimento
                  entre as partes envolvidas.
                </li>
                <li>
                  Iniciativa e proatividade: Disposição para assumir
                  responsabilidades e buscar oportunidades de melhorias nos
                  processos.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-10 lg:w-2/3"></div>
      </div>
    </section>
  )
}

export default About
