import React from 'react'
import Footer from '../Components/Footer'
import MenuTitle from '../Components/MenuTitle'
import PizzaCategory from '../Components/PizzaCategory'

function Menu() {

    return (
        <div className='ContentSection'>
            <MenuTitle />
            <PizzaCategory category={"PIZZAS RUCOLA"} />
            <PizzaCategory category={"PIZZAS SIGNATURES"} />
            <PizzaCategory category={"PIZZAS BASE CRÈME FRAÎCHE"} />
            <Footer />
        </div>
    )
}

export default Menu