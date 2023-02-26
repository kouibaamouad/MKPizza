import React from 'react'
import Delivering from '../Components/Delivering'
import Footer from '../Components/Footer'
import Ingrediants from '../Components/Ingrediants'
import Slider from '../Components/Slider'
import TopPizzas from '../Components/TopPizzas'

function Home() {
    return (
        <div className='ContentSection'>
            <Slider />
            <TopPizzas />
            <Ingrediants />
            <Delivering />
            <Footer />
        </div>
    )
}

export default Home