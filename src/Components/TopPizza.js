import React from 'react'

function TopPizza({ info }) {
    return (
        <div className='TopPizzaDiv'>
            <div className="TopPizzaInfo">
                <h1>{info.name}</h1>
                <p>{info.description}</p>
                <p>Pâte traditionnelle</p>
                <i>Taille — 30 cm</i>
            </div>
            <div className="TopPizzaImg">
                <img src={info.image} alt="" />
            </div>
        </div>
    )
}

export default TopPizza