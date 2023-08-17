import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

function Formulario() {
    const times = [
        'CS',
        'Valorant',
        'League of Legends',
        'TFT',
        'Dota',
        'Rocket League',
        'Rainbow Six',

    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Card cadastrado com sucesso!')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do time!</h2>
                <CampoTexto required={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto required={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Times" itens={times} />
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario;