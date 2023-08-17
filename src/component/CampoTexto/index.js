import './CampoTexto.css'

function CampoTexto(props) {
    return(
        <div className="campo__texto">
            <label>{props.label}</label>
            <input required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto;