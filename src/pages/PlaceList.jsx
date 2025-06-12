import React from "react";
import Button from "../components/Button.jsx";
import { CableIcon, CakeIcon } from "lucide-react";
import Heading from "../components/Heading.jsx";
import Card from "../components/Card.jsx";
import Cards from "../components/Cards.jsx";
import RandomPlace from "../components/RandomPlace.jsx";

function PlaceList() {
  return (
    <div className="p-7 md:p-10 lg:py-10 lg:px-20">
        <Heading title="Historical Places"/>
        <RandomPlace/>
      <Heading title="All Historical Places" />
      {/*<Button text="Hello John Doe" startIcon={<CakeIcon/>} endIcon={<CableIcon/>} customStyles="bg-amber-100 text-xl "/>*/}

      <Cards />
    </div>
  );
}

export default PlaceList;
