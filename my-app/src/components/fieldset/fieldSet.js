import React from 'react'

//esse componente é funcional, ele apenas receberá informações. A legenda, o label, o for, o id, o type e o value receberão props
const FieldSet = (props) => {
    return (
        <fieldset>
            <legend>{props.legend}</legend>
            <div class="secao__formulario__grupo">
                <label for={props.idInput}>{props.label}</label>
                <input id={props.idInput}type={props.type} value={props.value} />
            </div>
        </fieldset>
    )
}

export default FieldSet;