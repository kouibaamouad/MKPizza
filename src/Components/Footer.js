import React from 'react'

function Footer() {
    return (
        <div id='Footer' className='GlassEffect'>
            <div>
                <img src="https://i.imgur.com/yxlEwj2.png" alt="Logo" />
            </div>
            <div id='FooterInfo'>
                <div>
                    <h2>Adresse</h2>
                    <p>44 Rue du Général Leclerc, 95310 Saint-Ouen-l’Aumône</p>
                </div>
                <div>
                    <h2>En livraison</h2>
                    <div>
                        <img src="https://i.imgur.com/GfgWkEK.png" alt="deliveryManInFooter" />
                    </div>
                </div>
                <div>
                    <h2>Horraires</h2>
                    <div>
                        <p>Lundi – Vendredi</p>
                        <p> 9:00 – 18:00s</p>
                    </div>
                </div>
            </div>
            <div id='Bar'></div>
            <div id='Signature'>
                © Mouad Kouibaa
            </div>
            <div id='SocialMedia'>
                <div>
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div>
                    <i className="fa-brands fa-instagram"></i>
                </div>
                <div>
                    <i className="fa-brands fa-snapchat"></i>
                </div>
                <div>
                    <i className="fa-brands fa-twitter"></i>
                </div>
                <div>
                    <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                    <i className="fa-brands fa-pinterest-p"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer