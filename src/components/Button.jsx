import React from 'react'

function Button({startIcon, text, endIcon, customStyles, clickEvent}) {
    return (
        <>
         <button onClick={clickEvent}  className={`flex gap-2 ${customStyles} bg-indigo-500 text-white font-bold p-3 rounded-lg items-center`}>{startIcon} {text} {endIcon}</button>
        </>
    )
}

export default Button
