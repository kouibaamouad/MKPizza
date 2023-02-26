import React from 'react'
import { useDispatch } from 'react-redux'
import { Add } from '../ReduxTK/PanierSlice';

function PizzaCard({ info }) {
    const dispatch = useDispatch();

    return (
        <div className='PizzaCard'>
            <div className="PizzaImg">
                <img src={info.image} alt="PizzaName" />
                <div className="PizzaPrice">
                    <h4 style={{ marginTop: "20px" }}>{info.price} DH</h4>
                </div>
            </div>
            <h3 className='PizzaName'>
                {info.name}
            </h3>
            <div className='PizzaIngrediants'>
                <div>
                    <img src="https://i.imgur.com/a4lC9b4.png" alt="" />
                    <img src="https://i.imgur.com/a4lC9b4.png" alt="" />
                </div>
                <p>{info.description}</p>
                <div>
                    <img src="https://i.imgur.com/a4lC9b4.png" alt="" />
                    <img src="https://i.imgur.com/a4lC9b4.png" alt="" />
                </div>
            </div>
            <div>
                <div className="AddToCartButton" onClick={() => dispatch(Add({ idPizza: info.id, Quantite: 1, Sauces: [] }))}>
                    <p>Commander</p>
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PizzaCard