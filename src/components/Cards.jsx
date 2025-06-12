import React from 'react'
import Card from "./Card.jsx";

import {useSelector} from "react-redux";
import Heading from "./Heading.jsx";

function Cards() {
    const places = useSelector((state) => state.places);

    return (
        <>

          <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-6 ">
              {
                  places.map((place, index) => {
                      return(
                          <React.Fragment key={index} >
                              <Card place={place}/>
                          </React.Fragment>
                      )
                  })
              }
          </div>
        </>
    )
}

export default Cards
