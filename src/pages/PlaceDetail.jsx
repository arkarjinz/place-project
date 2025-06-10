import React from 'react'
import Heading from "../components/Heading.jsx";
import Button from "../components/Button.jsx";
import {ArrowLeft} from "lucide-react";
import {useNavigate} from "react-router-dom";
import Card from "../components/Card.jsx";

function PlaceDetail() {
    const navigate = useNavigate();
    return (
        <>
            <div className="p-20">
                <Heading title="Historical Places"/>
                <Button startIcon={<ArrowLeft/>} text="Go Back" clickEvent={() => navigate(-1)}/>

                <Card place={place}/>
            </div>


        </>

    )
}

export default PlaceDetail
