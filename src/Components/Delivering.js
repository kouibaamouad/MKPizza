import React, { useState } from 'react'

function Delivering() {
    const [toggleImage, setToggleImage] = useState(true);

    const test = () => {
        setTimeout(() => {
            setToggleImage(false)
        }, 720);
    }

    return (
        <div id='Delivering' className='GlassEffect' onMouseOver={test}>
            <div>
                <h1>LIVRAISON</h1>
                <p>
                    Vous avez envie de déguster une bonne pizza, chez vous, au bureau ou chez vos amis…</p>
            </div>
            <div>
                {
                    toggleImage
                        ? <img src="https://i.imgur.com/GfgWkEK.png" alt="deliveryMan1" />
                        : <img src="https://i.imgur.com/D5MZHCO.png" alt="deliveryMan2" />
                }
            </div>
        </div>
    )
}

export default Delivering