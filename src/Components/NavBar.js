import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"


function NavBar() {
    const PanierCount = useSelector(s => s.Panier.Data).length;
    return (
        <div id='NavBar' className='GlassEffect'>
            <div id='Logo'>

            </div>
            <div id="Menu">
                <div>
                    <span className='PizzaIcon'></span>
                    <NavLink to="/"><h2>Home</h2></NavLink>
                </div>
                <div>
                    <span className='PizzaIcon'></span>
                    <NavLink to="/Menu"><h2>Menu</h2></NavLink>
                </div>
                <div className='NavbarPanierLink'>
                    <span className='PizzaIcon'></span>
                    <NavLink to="/Panier"><h2>Panier</h2></NavLink>
                    {PanierCount !== 0 && <div>{PanierCount}</div>}
                </div>
            </div>
            <div id="WorkTime">
                <lord-icon
                    src="https://cdn.lordicon.com/kbtmbyzy.json"
                    trigger="loop"
                    delay="2000"
                    stroke="90"
                    colors="primary:#000000,secondary:#000000"
                    style={{ width: "60px", height: "60px" }}>
                </lord-icon>
                <h3>9:00</h3>
                <h3>18:00</h3>
            </div>
        </div>
    )
}

export default NavBar