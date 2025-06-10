import React from 'react'
import Button from "./Button.jsx";
import {ArrowLeft} from "lucide-react";

function Heading({title}) {
    return (
        <>

                <h2 className=" text-4xl text-white font-bold pb-7">{title}</h2>


        </>
    )
}

export default Heading
