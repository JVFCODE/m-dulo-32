class Tarefa {
  titulo: string
  email: string
  tel: string
  rua: string
  estado: string
  bairro: string
  id: number

  constructor(
    titulo: string,
    email: string,
    tel: string,
    rua: string,
    estado: string,
    bairro: string,
    id: number
  ) {
    this.titulo = titulo
    this.email = email
    this.tel = tel
    this.rua = rua
    this.estado = estado
    this.bairro = bairro
    this.id = id
  }
}

export default Tarefa
