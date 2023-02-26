import React from 'react'
import { Link } from 'react-router-dom'

function ThankYou() {
    return (
        <div id='ThankYou'>
            <div className='GlassEffect'>
                <div>
                    <img src="https://i.imgur.com/uQGG2TR.gif" alt="" />
                </div>
                <div>
                    <h2>Merci pour votre commande.</h2>
                </div>
                <div>
                    <h4>Attendez l’appel.</h4>
                </div>
                <Link to="/">
                    <div>
                        <div id="ReturnButton">
                            <p>Retour</p>
                            <span className="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ThankYou