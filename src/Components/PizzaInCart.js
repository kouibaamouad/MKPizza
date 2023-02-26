import React from 'react'
import Sauce from './Sauce'
import { fetchData as fetchDataS } from '../ReduxTK/SauceSlice'
import { fetchData as fetchDataP } from '../ReduxTK/PizzaSlice'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { Delete, IncrementQuantite, DecrementQuantite } from '../ReduxTK/PanierSlice';


function PizzaInCart({ info }) {
    const Pizza = useSelector(s => s.Pizza.Data).filter(p => p.id === info.idPizza)[0];
    const Sauces = useSelector(s => s.Sauce.Data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataS())
        dispatch(fetchDataP())
    }, [])
    return (
        <div className='PizzaInCart GlassEffect'>
            <lord-icon
                src="https://cdn.lordicon.com/gsqxdxog.json"
                trigger="loop"
                delay="2000"
                colors="primary:#ffffff,secondary:#ffffff"
                stroke="100"
                style={{ width: "50px", height: "50px" }}
                onClick={() => dispatch(Delete(info.idPizza))}
            >
            </lord-icon>
            <div className='PizzaInCartImg'>
                <img src={Pizza.image} alt="" />
            </div>
            <div className='PizzaNameQuantitePrice'>
                <h1>Pizza {Pizza.name}</h1>
                <div className='QuantitePrice'>
                    <div className='Quantite'>
                        <i className="fa-solid fa-chevron-up" onClick={() => dispatch(IncrementQuantite(info.idPizza))}></i>
                        <i className="fa-solid fa-chevron-down" onClick={() => dispatch(DecrementQuantite(info.idPizza))}></i>
                        <p><b>{info.Quantite}</b></p>
                    </div>
                    <h2>{info.Quantite * Pizza.price} DH</h2>
                </div>
            </div>
            <div className='Sauces'>
                <h3>Choisissez des sauces</h3>
                <div>
                    {
                        Sauces.map(s => <Sauce info={s} key={s.id} Pizza={info.idPizza} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default PizzaInCart