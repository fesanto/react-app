import React, { Component } from 'react';
import FieldSet from './components/fieldset';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    //this.state é um objeto e dentro temos os seus itens, ele mudará conforme o que é digitado no input
    this.state = {
      //se for type text, coloca string
      ganhoMes: '',
      //se for type number, coloca 0
      horasDia: 0,
      diasSemana: 0,
      semanasFerias: 0,
      ganhoHora: '',
      projetoHoras: 0,
      projetoDias: 0,
      valueHour: 0,
      valueProject: 0,
    }
  }

  //essa função vem de um evento (onChange)
  setGanhoMes = (e) => {
    this.setState({
      ganhoMes: e.target.value
    })
  }

  setHorasDia = (e) => {
    this.setState({
      //parseInt converte para numero inteiro
      horasDia: parseInt(e.target.value)
    })
  }

  setDiasSemana = (e) => {
    this.setState({
      diasSemana: parseInt(e.target.value)
    })
  }

  setSemanasFerias = (e) => {
    this.setState({
      semanasFerias: parseInt(e.target.value)
    })
  }

  setGanhoHora = (e) => {
    this.setState({
      ganhoHora: e.target.value
    })
  }

  setProjetoHoras = (e) => {
    this.setState({
      projetoHoras: parseInt(e.target.value)
    })
  }

  setProjetoDias = (e) => {
    this.setState({
      projetoDias: parseInt(e.target.value)
    })
  }



  calcValueHour = (event) => {
    event.preventDefault()

    // processamento
    const horasPorSemana = this.state.horasDia * this.state.diasSemana;
    const horasDeFerias = horasPorSemana * this.state.semanasFerias;
    const totalHoras = (52.1 * horasPorSemana) - horasDeFerias;
    const ganhoPorAno = this.state.ganhoMes * 12;
    let valorDeHora = ganhoPorAno / (totalHoras); // divide o ganho anual por 52.1% das horas totais

    valorDeHora += 0.2 * valorDeHora;
    // soma 20% do valor da hora
    valorDeHora = parseFloat(valorDeHora).toFixed(2)

    this.setState({
      valueHour: valorDeHora
    })
  }

  calcValueProject = (event) => {
    event.preventDefault()

    // processamento
    let valorDeProjeto = this.state.ganhoHora * this.state.projetoHoras * this.state.projetoDias;
    valorDeProjeto = parseFloat(valorDeProjeto).toFixed(2);

    this.setState({
      valueProject: valorDeProjeto
    })

  }

  render() {
    return (
      <main className="conteudo-principal">
        <section className="secao secao-hora">
          <header className="secao__cabecalho">Calcule o seu valor/hora!</header>
          <article className="secao__conteudo">
            <form className="secao__formulario" onSubmit={this.calcValueHour}>
              <FieldSet
                legend='Quanto você quer ganhar por mês?'
                label='Quantidade por mês'
                idInput='ganho-mes'
                text='number'
                //aqui chamamos o que definimos lá na state, é este que será alterado
                value={this.state.ganhoMes}
                //onChange seta o valor do input conforme ele for sendo digitado e recebe uma nova função (setGanhoMes) que será definida mais pra cima.
                onChange={this.setGanhoMes}
              //o ganhoMes começa zerado. Ele é state pq ele será alterado (this.state.ganhoMes).
              //o onChange recebe valores conforme digitamos no input e ele será responsável em receber a função que fará a alteração do state pelo valor do input.
              //a função setGanhoMes difinida acima substitui o valor da state ganhoMes pelo valor digitado.
              />
              <FieldSet
                legend='Quantas horas você quer trabalhar por dia?'
                label='Horas por dia'
                idInput='horas-dia'
                type='number'
                value={this.state.horasDia}
                onChange={this.setHorasDia}
              />
              <FieldSet
                legend='Quantos dias você quer trabalhar por semana?'
                label='Dias por Semana'
                idInput='dias-semana'
                type='number'
                value={this.state.diasSemana}
                onChange={this.setDiasSemana}
              />
              <FieldSet
                legend='Quantas semanas por ano você quer tirar de férias?'
                label='Semanas por ano'
                idInput='semanas-ferias'
                type='number'
                value={this.state.semanasFerias}
                onChange={this.setSemanasFerias}
              />
              <button className='button'>Calcular</button>
            </form>
          </article>
          <footer className="secao__rodape">
            <h3 className="secao__rodape__valor"><span>{this.state.valueHour}</span></h3>
            <p className="secao__rodape__legenda">Seu valor por hora</p>
          </footer>

        </section>

        <section className="secao secao-projeto">
          <header className="secao__cabecalho">Calcule o valor de um projeto!</header>
          <article className="secao__conteudo">
            <form className="secao__formulario" onSubmit={this.calcValueProject}>
              <FieldSet
                legend='Quanto você ganha por hora?'
                label='Seu valor/hora'
                idInput='ganho-hora'
                text='text'
                value={this.state.ganhoHora}
                onChange={this.setGanhoHora}
              />
              <FieldSet
                legend='Quantas horas irá trabalhar no projeto por dia?'
                label='Horas por dia'
                idInput='projeto-horas'
                type='number'
                value={this.state.projetoHoras}
                onChange={this.setProjetoHoras}
              />
              <FieldSet
                legend='Quantos dias irá durar o projeto?'
                label='Dias'
                idInput='projeto-dias'
                type='number'
                value={this.state.projetoDias}
                onChange={this.setProjetoDias}
              />
              <button className='button'>Calcular</button>
            </form>
          </article>
          <footer className="secao__rodape">
            <h3 className="secao__rodape__valor"><span>{this.state.valueProject}</span></h3>
            <p className="secao__rodape__legenda">Valor total do projeto</p>
          </footer>
        </section>
      </main>
    );
  }
}

export default App;
