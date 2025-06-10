import React from 'react'
import Card from "./Card.jsx";
import {data} from "../data.js";

function Cards() {
    return (
        <>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {
                  data.map((place, index) => {
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
