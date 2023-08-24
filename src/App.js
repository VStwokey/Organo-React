import { useState } from 'react';
import Banner from './component/Banner';
import Formulario from './component/Formulário';
import Time from './component/Time';

function App() {

  const times = [
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
      corSecundaria: '#8913ff'
    },
  ]

  const [companheiros, setCompanheiros] = useState([])

  const aoNovoCompanheiroAdicionado = (companheiro) => {
    console.log(companheiro)
    setCompanheiros([...companheiros, companheiro])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoCompanheiroCadastrado = {companheiro => aoNovoCompanheiroAdicionado(companheiro)} />

      {times.map(time => <Time key={time.nome} nome = {time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} /> )} 
      

      {/* <Time nome = "CS"/> */}
    </div>
  );
}

export default App;
