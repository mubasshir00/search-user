import React from 'react'
import './Card.css'
const Card = ({head,children}) => {
    return (
       <div className="card">
           <div className="cardHeading">
                <h1>{head}</h1>
           </div>
           <div className="cardBody">
               {children}
           </div>
       </div>
    )
}

export default Card
