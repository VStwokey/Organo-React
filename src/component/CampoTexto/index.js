import { useState } from 'react'
import './CampoTexto.css'

function CampoTexto(props) {

    // let valor = ''

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo__texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto;