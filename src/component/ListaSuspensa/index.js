import './ListaSuspensa.css'

function ListaSuspensa(props) {
    return(
        <div className='lista__suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}> {item} </option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;