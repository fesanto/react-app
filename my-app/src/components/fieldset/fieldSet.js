import React from 'react'

//esse componente é funcional, ele apenas receberá informações. A legenda, o label, o for, o id, o type e o value receberão props
const FieldSet = (props) => {
    return (
        <fieldset>
            <legend>{props.legend}</legend>
            <div className="secao__formulario__grupo">
                <label htmlFor={props.idInput}>{props.label}</label>
                <input id={props.idInput}type={props.type} value={props.value} onChange={props.onChange}/>
            </div>
        </fieldset>
    )
}

export default FieldSet;