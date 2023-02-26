import React from 'react'
import TopPizza from './TopPizza'
import { fetchData } from '../ReduxTK/TopPizzaSlice'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';

function TopPizzas() {
    const TopPizzas = useSelector(s => s.TopPizza.Data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [])
    return (
        <div id='TopPizzas' className='GlassEffect'>
            <h1>Préparé Spécialement Pour Vous</h1>
            <div id='TopPizzasSection'>
                {
                    TopPizzas.map((p, i) => <TopPizza info={p} key={i} />)
                }
            </div>
        </div>
    )
}

export default TopPizzas