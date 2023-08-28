import Companheiro from '../Companheiro';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.companheiros.length > 0)
            ?
            <section className='time' style={css} >
                <h3 style={{ borderColor: props.corPrimaria }}> {props.nome} </h3>
                <div className='companheiros'>
                    {props.companheiros.map(companheiro => {
                        return <Companheiro
                            corDeFundo={props.corPrimaria}
                            key={companheiro.nome}
                            nome={companheiro.nome}
                            funcao={companheiro.funcao}
                            imagem={companheiro.imagem}
                            aoDeletar={props.aoDeletar}
                            />
                        }
                    )}
                </div>
            </section>
            : ''
    )
}

export default Time;