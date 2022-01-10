import React from 'react'
import "./card.css"
function Card({id,name,rupee,imgUrl}) {
    return (
        <div className="bg-green dib br3 pa1  mv1 mh2 grow cli tc bw2 shadow-5">
            <img src={imgUrl} alt={id} className='pic'/>
            <h3>{name}</h3>
            <p>RS:{rupee}</p>
        </div>
    )
}

export default Card
