import { AiFillCloseCircle } from 'react-icons/ai';
import './Companheiro.css'

const Companheiro = ({nome, imagem, funcao, corDeFundo, aoDeletar}) => {
    return (
        <div className='companheiro'>
            <AiFillCloseCircle size={25} className='deletar' onClick={aoDeletar} />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{funcao}</h5>
            </div>
        </div>
    )
}

export default Companheiro;