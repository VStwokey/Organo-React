import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

function Formulario(props) {

    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCompanheiroCadastrado({
            nome,
            funcao,
            imagem,
            time
        })
        setNome('')
        setFuncao('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do companheiro!</h2>
                <CampoTexto required label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto required label="Função" placeholder="Digite sua função" valor={funcao} aoAlterado={valor => setFuncao(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa label="Times" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao texto="Criar Card" />
            </form>
            
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: corTime})
            }
            }>
                <h2>Preencha os dados para um novo time!</h2>
                <CampoTexto required label="Nome" placeholder="Digite o nome do time" valor={nomeTime} aoAlterado={valor => setNomeTime(valor)} />
                <CampoTexto required label="Cor" placeholder="Digite a cor do time" valor={corTime} aoAlterado={valor => setCorTime(valor)} />
                <Botao texto="Criar Time" />
            </form>
        </section>
    )
}

export default Formulario;