import hexToRgba from 'hex-to-rgba';
import Companheiro from '../Companheiro';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.cor, }

    return (
        (props.companheiros.length > 0)
            ?
            <section className='time' style={{ css, backgroundColor: hexToRgba(props.cor, '0.6') }} >
                <input onChange={evento => props.mudarCor(evento.target.value, props.id)}
                    value={props.cor}
                    type='color'
                    className='input-color' />

                <h3 style={{ borderColor: props.cor }}> {props.nome} </h3>
                <div className='companheiros'>
                    {props.companheiros.map(companheiro => {
                        return <Companheiro
                            corDeFundo={props.cor}
                            key={companheiro.nome}
                            nome={companheiro.nome}
                            funcao={companheiro.funcao}
                            imagem={companheiro.imagem}
                            aoDeletar={() => props.aoDeletar(companheiro.id)}
                        />
                    }
                    )}
                </div>
            </section>
            : ''
    )
}

export default Time;