import React from 'react'
import Button from "./Button.jsx";
import {ArrowRight, Map} from "lucide-react";
import {useNavigate} from "react-router-dom";

function Card({place}) {
    const {id,  name, image, description, visited} = place;
    let navigate = useNavigate();
    return (
        <>
          <div className="bg-indigo-50  p-4 text-center">
              <img src={image}  alt="places" className="aspect-video object-cover"/>
               <h3 className="text-xl mt-3">{name}</h3>
              <p>{description}</p>
              <p className="text-indigo-900 font-bold my-3">{
                  visited ? "Visited" : "Not Visited!"
              }</p>

              <div className="flex justify-between">
                   <Button startIcon={<Map/>} text="Mark as visited" />
                  <Button clickEvent={() => navigate(`/${id}`)} endIcon={<ArrowRight/>} text="View details"/>
              </div>
          </div>
        </>
    )
}

export default Card
