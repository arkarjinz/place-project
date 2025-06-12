import React from "react";
import Button from "./Button.jsx";
import { ArrowRight, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {markPlaces} from "../redux/placeSlice.js";

function Card({ place }) {
  const { id, name, image, description, visited } = place;

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleVisited = (id,visited) => {
    console.log(visited);
    dispatch(markPlaces(id));
  }
  return (
    <>
      <div className="bg-indigo-50  p-4 text-center">
        <img src={image} alt="places" className="aspect-video object-cover" />
        <h3 className="text-xl mt-3">{name}</h3>
        <p>{description}</p>
        <p className="text-indigo-900 font-bold my-3">
          {visited ? "Visited" : "Not Visited!"}
        </p>

        <div className="flex justify-between">
          <Button clickEvent={() => toggleVisited(id,visited)} startIcon={<Map size="18" />} text="Mark as visited" />
          <Button
            clickEvent={() => navigate(`/${id}`)}
            endIcon={<ArrowRight size="18" />}
            text="View details"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
