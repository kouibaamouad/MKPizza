import React from 'react'
import { useState } from 'react'

function Slider() {
    const [counter, setCounter] = useState(0);
    const images = [
        "https://i.imgur.com/CyVHJOg.png",
        "https://i.imgur.com/kKb88FC.png",
        "https://i.imgur.com/vnAQW2P.png",
        "https://i.imgur.com/rr5tOnL.png"
    ]

    const Next = () => {
        setCounter(counter + 1)
    }
    const Previous = () => {
        setCounter(counter - 1)
    }
    return (
        <div id='Slider' className='GlassEffect'>
            <div style={{ backgroundImage: `url(${images[counter]})` }}>
                {
                    counter === 0
                        ?
                        <span className="material-symbols-outlined" style={{ opacity: "0" }}>
                            arrow_back_ios
                        </span>
                        :
                        <span className="material-symbols-outlined" onClick={Previous}>
                            arrow_back_ios
                        </span>
                }
                {
                    counter === images.length - 1
                        ?
                        <span className="material-symbols-outlined" style={{ opacity: "0" }}>
                            arrow_forward_ios
                        </span>
                        :
                        <span className="material-symbols-outlined" onClick={Next}>
                            arrow_forward_ios
                        </span>
                }

            </div>
        </div>
    )
}

export default Slider