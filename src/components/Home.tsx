import Image from 'next/image'

const Home = () => {
  return (
    <section id="section-about" className="justify-between">
      <div className="flex flex-col gap-2 justify-center items-center w-1/3">
        <div className="flex relative items-center w-52 h-52 border-4 border-double border-purple-700 rounded-full overflow-hidden">
          <Image
            src="/perfil.jpeg"
            alt="logo"
            width={300}
            height={300}
            className="absolute object-contain w-auto"
          />
        </div>
        <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#691AEA] to-[#6C0957]">
          Wallison Moura
        </span>
        <p className="flex text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#691AEA] to-[#6C0957]">
          Desenvolvedor FullStack
        </p>
      </div>
      <div className="flex flex-col w-2/3 h-full justify-center items-center p-10 gap-4">
        <h2 className="text-4xl font-extrabold text-[#691AEA]">Sobre mim</h2>
        <div className="bg-gradient-to-r from-[#691AEA] to-[#6C0957] rounded-lg p-4">
          <p className="text-white">
            Apaixonado por programação / desenvolvimento de sistema desde 2018,
            formado em Análise e Desenvolvimento de Sistemas pela Faculdade
            Católica Imaculada Conceição do Recife. Sou uma pessoa que adora
            desafios, assim como todo desenvolvedor, mas em especial aqueles que
            me tiram da minha zona de conforto, pois as minhas maiores evoluções
            e aprendizados vierem de momentos em que me vi obrigada a sair dela
            e enfrentar a vida. Tenho mais de 2 anos de experiência profissional
            em React e React Native com Typescript. Estudante assíduo, que
            sempre busca aprimorar cada vez mais minhas habilidades técnicas e
            interpessoais.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
