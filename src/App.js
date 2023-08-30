import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './component/Banner';
import Formulario from './component/Formulário';
import Time from './component/Time';
import Rodape from './component/Rodape';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Escolha Seu Time',
    },
    {
      id: uuidv4(),
      nome: 'CS',
      cor: '#ffc400'
    },
    {
      id: uuidv4(),
      nome: 'Valorant',
      cor: '#f46058'
    },
    {
      id: uuidv4(),
      nome: 'League of Legends',
      cor: '#3250fe'
    },
    {
      id: uuidv4(),
      nome: 'Rocket League',
      cor: '#2948fb'
    },
    {
      id: uuidv4(),
      nome: 'NBA',
      cor: '#1135ff'
    }
  ])

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  const [companheiros, setCompanheiros] = useState([])

  const aoNovoCompanheiroAdicionado = (companheiro) => {
    setCompanheiros([...companheiros, companheiro])
  }

  function deletarCompanheiro(id) {
    setCompanheiros(companheiros.filter(companheiro => companheiro.id !== id))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4() } ])

  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoCompanheiroCadastrado={companheiro => aoNovoCompanheiroAdicionado(companheiro)} />

      {times.map(time =>
        <Time
          mudarCor={mudarCorDoTime}
          key={time.nome}
          id={time.id}
          nome={time.nome}
          cor={time.cor}
          companheiros={companheiros.filter(companheiro => companheiro.time === time.nome)}
          aoDeletar={deletarCompanheiro}
        />)}

      <Rodape />

    </div>
  );
}

export default App;
