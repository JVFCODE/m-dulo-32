import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, Campo, Titulo } from '../../styles'
import { BotaoCadastrar, Form } from './styles'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [rua, setRua] = useState('')
  const [estado, setEstado] = useState('')
  const [bairro, setBairro] = useState('')

  const cadastrarTarefas = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        email,
        tel,
        rua,
        estado,
        bairro
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Cadastro</Titulo>
      <Form onSubmit={cadastrarTarefas}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="Text"
          placeholder="Titulo"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="Text"
          placeholder="E-mail"
        />
        <Campo
          value={tel}
          onChange={(evento) => setTel(evento.target.value)}
          type="Text"
          placeholder="Telefone"
        />
        <Campo
          value={rua}
          onChange={(evento) => setRua(evento.target.value)}
          type="Text"
          placeholder="Rua"
        />
        <Campo
          value={estado}
          onChange={(evento) => setEstado(evento.target.value)}
          type="Text"
          placeholder="Estado"
        />
        <Campo
          value={bairro}
          onChange={(evento) => setBairro(evento.target.value)}
          type="Text"
          placeholder="Bairro"
        />
        <div>
          <BotaoCadastrar type="submit"> Cadastrar </BotaoCadastrar>
        </div>
      </Form>
    </MainContainer>
  )
}

export default Formulario
