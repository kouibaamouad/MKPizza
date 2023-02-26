import React from 'react'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import PizzaInCart from '../Components/PizzaInCart'
import { useSelector } from 'react-redux'

function Panier() {
    const Panier = useSelector(s => s.Panier.Data);

    return (
        <div className='ContentSection'>
            {
                Panier.map(
                    (p, i) => <PizzaInCart info={p} key={i} />
                )
            }
            <Form />
            <Footer />
        </div>

    )
}

export default Panier