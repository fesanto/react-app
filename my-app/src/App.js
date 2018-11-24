import React, { Component } from 'react';
import FieldSet from './components/fieldset';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
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
    }
  }


  render() {
    return (
      <main className="conteudo-principal">
        <section className="secao secao-hora">
          <header className="secao__cabecalho">Calcule o seu valor/hora!</header>
          <article className="secao__conteudo">
            <form className="secao__formulario">
              <FieldSet
                legend='Quanto você quer ganhar por mês?'
                label='Quantidade por mês'
                idInput='ganho-mes'
                text='text'
                value={0}
              />
              <FieldSet
                legend='Quantas horas você quer trabalhar por dia?'
                label='Horas por dia'
                idInput='horas-dia'
                type='number'
                value={0}
              />
              <FieldSet
                legend='Quantos dias você quer trabalhar por semana?'
                label='Dias por Semana'
                idInput='dias-semana'
                type='number'
                value={0}
              />
              <FieldSet
                legend='Quantas semanas por ano você quer tirar de férias?'
                label='Semanas por ano'
                idInput='semanas-ferias'
                type='number'
                value={0}
              />
            </form>
          </article>
          <footer class="secao__rodape">
            <h3 class="secao__rodape__valor"><span>R$ 0,00</span><small>/hora</small></h3>
            <p class="secao__rodape__legenda">Seu valor por hora</p>
          </footer>
        </section>

        <section className="secao secao-projeto">
          <header className="secao__cabecalho">Calcule o valor de um projeto!</header>
          <article className="secao__conteudo">
            <form className="secao__formulario">
              <FieldSet
                legend='Quanto você ganha por hora?'
                label='Seu valor/hora'
                idInput='ganho-hora'
                text='text'
                value={0}
              />
              <FieldSet
                legend='Quantas horas irá trabalhar no projeto por dia?'
                label='Horas por dia'
                idInput='projeto-horas'
                type='number'
                value={0}
              />
              <FieldSet
                legend='Quantos dias irá durar o projeto?'
                label='Dias'
                idInput='projeto-dias'
                type='number'
                value={0}
              />
            </form>
          </article>
          <footer class="secao__rodape">
            <h3 class="secao__rodape__valor"><span>R$ 0,00</span></h3>
            <p class="secao__rodape__legenda">Valor total do projeto</p>
          </footer>
        </section>

      </main>
    );
  }
}

export default App;
