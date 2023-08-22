import { useState } from 'react';
import Banner from './component/Banner';
import Formulario from './component/Formulário';

function App() {

  const [companheiros, setCompanheiros] = useState([])

  const aoNovoCompanheiroAdicionado = (companheiro) => {
    console.log(companheiro)
    setCompanheiros([...companheiros, companheiro])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoCompanheiroCadastrado = {companheiro => aoNovoCompanheiroAdicionado(companheiro)} />
    </div>
  );
}

export default App;
