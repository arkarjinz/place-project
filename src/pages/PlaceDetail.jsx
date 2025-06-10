import React from 'react'
import Heading from "../components/Heading.jsx";
import Button from "../components/Button.jsx";
import {ArrowLeft} from "lucide-react";
import {useNavigate, useParams} from "react-router-dom";
import Card from "../components/Card.jsx";
import {useSelector} from "react-redux";

function PlaceDetail() {
    const navigate = useNavigate();

    const {id} = useParams();
    const place = useSelector((state) => state.places.find(place => place.id === parseInt(id)))


    return (
        <>
            <div className="py-10 px-20">
                <Heading title="Historical Places"/>
                <Button startIcon={<ArrowLeft/>} text="Go Back" clickEvent={() => navigate(-1)}/>
                 <div className="max-w-md mx-auto mt-10">
                     <Card place={place}/>
                 </div>

            </div>


        </>

    )
}

export default PlaceDetail
