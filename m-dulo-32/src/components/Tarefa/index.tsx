import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/tarefa'
import { BotaoSalvar } from '../../styles'
import { Botao } from '../../styles'

type Props = TarefaClass

const Tarefa = ({ titulo, email, tel, rua, estado, bairro, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricao.length > 0) {
      setDescricao(descricao)
    }
  }, [descricao])

  return (
    <S.Card>
      <S.Titulo> {titulo} </S.Titulo>
      <S.Dados> E-mail: {email} </S.Dados>
      <S.Dados> Telefone: {tel} </S.Dados>
      <S.Dados> Rua: {rua} </S.Dados>
      <S.Dados> Estado: {estado} </S.Dados>
      <S.Dados> Bairro: {bairro} </S.Dados>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar>Salvar</BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
