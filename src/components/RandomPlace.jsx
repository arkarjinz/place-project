import React from 'react'
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import {useSelector} from "react-redux";

function RandomPlace() {
    const place = useSelector((state) => state.places[0]);
    console.log(place);
    return (
        <>

            <Button text="Suggest Random Place"/>
            <div className="max-w-md mx-auto mt-10">
                <Card place={place}/>   
            </div>


        </>
    )
}

export default RandomPlace
