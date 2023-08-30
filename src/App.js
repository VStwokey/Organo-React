import { useState } from 'react';
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
      nome: 'CS',
      corPrimaria: '#000000',
      corSecundaria: '#ffc400'
    },
    {
      nome: 'Valorant',
      corPrimaria: '#000000',
      corSecundaria: '#f46058'
    },
    {
      nome: 'League of Legends',
      corPrimaria: '#ffd700',
      corSecundaria: '#3250fe'
    },
    {
      nome: 'Rocket League',
      corPrimaria: '#ffffff',
      corSecundaria: '#2948fb'
    },
    {
      nome: 'NBA',
      corPrimaria: '#ff0000',
      corSecundaria: '#1135ff'
    }
  ])

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome ) {
        time.corPrimaria = cor;
      }
      return time;
    }));
  }

  const [companheiros, setCompanheiros] = useState([])

  const aoNovoCompanheiroAdicionado = (companheiro) => {
    setCompanheiros([...companheiros, companheiro])
  }

  function deletarCompanheiro() {
    console.log('Deletar')
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)}
        aoCompanheiroCadastrado={companheiro => aoNovoCompanheiroAdicionado(companheiro)} />

      {times.map(time =>
        <Time
          mudarCor={mudarCorDoTime}
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          companheiros={companheiros.filter(companheiro => companheiro.time === time.nome)}
          aoDeletar={deletarCompanheiro}
        />)}

      <Rodape />

    </div>
  );
}

export default App;
