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
                <CampoTexto required={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto required={true} label="Função" placeholder="Digite sua função" valor={funcao} aoAlterado={valor=>setFuncao(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor=>setImagem(valor)} />
                <ListaSuspensa label="Times" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario;