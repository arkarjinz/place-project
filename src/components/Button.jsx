import React from 'react'

function Button({startIcon, text, endIcon, customStyles, clickEvent}) {
    return (
        <>
         <button onClick={clickEvent}  className={`flex gap-1 ${customStyles} bg-indigo-500 text-white text-sm font-bold p-2 rounded-lg items-center`}>{startIcon} {text} {endIcon}</button>
        </>
    )
}

export default Button
