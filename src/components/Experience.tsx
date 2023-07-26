const Experience = () => {
  return (
    <section id="section-experience" className="flex-col gap-8 justify-center">
      <h1 className="text-4xl font-extrabold text-[#691AEA]">
        Experiência Profissional
      </h1>
      <div className="flex flex-col text-white bg-gradient-to-r from-[#691AEA] to-[#6C0957] rounded-lg p-4 w-3/4 gap-2">
        <div>
          <p className="text-white">
            Desenvolvedor Full Stack Pleno na Transformatio Technology Eireli -
            (alocado na Secretária de Defesa Social de Pernambuco)
          </p>
          <p>Set 2020 - Dez 2022</p>
        </div>
        <ul className="flex flex-col list-disc px-4">
          <li>
            Participação na criação, elaboração e desenvolvimento de novos
            sistemas e aplicativos;
          </li>
          <li>
            Colaboração com a criação dos protótipos e design dos projetos com o
            editor gráfico figma;
          </li>
          <li>
            Responsável pelo desenvolvimento de sistema web e mobile que
            melhoraram tanto os processos policias, como a agilidade no trabalho
            na segurança pública do estado. Utilizamos o trello onde eram
            definidas e refinadas as tarefas da equipe. Os versionamentos dos
            códigos através do git e o gerenciador de repositórios gitlab. A
            comunicação dos sistemas web e o mobile era através de
            microsserviços de vários departamentos governamentais e a
            autenticação pelo LDAP da ATI do estado com jwt token;
          </li>
          <li>
            Desenvolvimento de um novo sistema para substituição de um sistema
            legado;
          </li>
        </ul>
        <p>
          Tecnologias e bibliotecas: React, React Native, Typescript, Styled
          Component, Docker, Material UI, Context Api, Zustand, REST API, Axios,
          Micro serviços, App Center, CodePush e OpenShift;
        </p>
      </div>
    </section>
  )
}

export default Experience
