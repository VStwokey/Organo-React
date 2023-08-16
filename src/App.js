import Banner from './component/Banner';
import CampoTexto from './component/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome"/>
      <CampoTexto label="Cargo"/>
      <CampoTexto label="Imagem"/>
    </div>
  );
}

export default App;
