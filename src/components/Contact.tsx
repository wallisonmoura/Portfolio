'use client'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ContactIcon } from './icons'

type ContatoProps = {
  name: string
  email: string
  message: string
}

const schema = yup.object({
  name: yup.string().required('Preencha seu nome.'),
  email: yup.string().required('Preencha seu email.').email('Email inválido.'),
  message: yup
    .string()
    .required('Preencha o campo de messagem')
    .min(10, 'Mínimo 10 caracteres')
})

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: ContatoProps) => {
    const formData = {
      name: data.name,
      email: data.email,
      message: data.message
    }
    fetch(`${process.env.NEXT_PUBLIC_EMAIL_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => {
      // Aqui você pode lidar com a resposta da solicitação POST
      if (response.ok) {
        // A resposta foi bem-sucedida
        console.log('Formulário enviado com sucesso!')
      } else {
        // A resposta não foi bem-sucedida
        console.error('Houve um problema ao enviar o formulário.')
      }
    })
  }

  return (
    <section
      id="section-contact"
      className="flex-col lg:h-screen gap-4 justify-center py-4 lg:pt-0"
    >
      <div className="flex border-b-2 border-[#691AEA] gap-2">
        <ContactIcon />
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#691AEA] ">
          Contato
        </h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-[800px] p-4 w-full gap-2"
      >
        <div className="flex flex-col md:flex-row text-white md:gap-2">
          <p>Envie o formulário abaixo ou envie-me um e-mail para</p>
          <a
            href="mailto:wallisonmoura.dev@gmail.com"
            target="_blank"
            className="text-gray-500 hover:text-[#691AEA]"
            rel="noreferrer"
          >
            wallisonmoura.dev@gmail.com
          </a>
        </div>
        <input
          {...register('name')}
          placeholder="Digite seu nome"
          type="text"
          className="py-2 px-3 bg-white rounded-md border-2"
        />
        {!!errors && <p className="text-red-500">{errors.name?.message}</p>}
        <input
          {...register('email')}
          placeholder="Digite seu email"
          type="text"
          className="py-2 px-3 bg-white rounded-md border-2  border-white"
        />
        {!!errors && <p className="text-red-500">{errors.email?.message}</p>}
        <textarea
          {...register('message')}
          placeholder="Digite sua mensagem"
          name="message"
          cols={30}
          rows={8}
          className="py-2 px-3 bg-white rounded-md border-2"
        ></textarea>
        {!!errors && <p className="text-red-500">{errors.message?.message}</p>}
        <button
          type="submit"
          className="text-white border-2 hover:bg-[#691AEA] hover:border-[#691AEA] font-medium px-6 py-3 mx-auto ml-0 flex items-center rounded-md duration-700"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contact
