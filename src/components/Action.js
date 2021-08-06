import React from 'react'

const Action = (props)=> (
    <div>
        <button
        className="big-button"
         onClick={props.handlepick}
        disabled={!props.hasOptions}>
            What should i do</button>
    </div>
)
export { Action as default}