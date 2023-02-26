import React, { useEffect } from 'react'
import PizzaCard from './PizzaCard'
import { fetchData } from '../ReduxTK/PizzaSlice'
import { useDispatch, useSelector } from "react-redux"

function PizzaCategory({ category }) {
    const dispatch = useDispatch();
    const Pizzas = useSelector(s => s.Pizza.Data);
    useEffect(() => {
        dispatch(fetchData())
    }, []);
    return (
        <div className='PizzaCategory GlassEffect'>
            <h2>{category}</h2>
            <div>
                {
                    Pizzas.filter(p => p.category === category).map(p => <PizzaCard info={p} key={p.id} />)
                }
            </div>
        </div>
    )
}

export default PizzaCategory