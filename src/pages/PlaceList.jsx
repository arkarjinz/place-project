import React from "react";
import Button from "../components/Button.jsx";
import { CableIcon, CakeIcon } from "lucide-react";
import Heading from "../components/Heading.jsx";
import Card from "../components/Card.jsx";
import Cards from "../components/Cards.jsx";

function PlaceList() {
  return (
    <div className="p-6 md:p-10 lg:py-10 lg:px-20">
      <Heading title="All Historical Places" />
      {/*<Button text="Hello John Doe" startIcon={<CakeIcon/>} endIcon={<CableIcon/>} customStyles="bg-amber-100 text-xl "/>*/}

      <Cards />
    </div>
  );
}

export default PlaceList;
