import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddSauce, DeleteSauce } from '../ReduxTK/PanierSlice';

function Sauce({ info, Pizza }) {
    const dispatch = useDispatch();
    let [sauce, setSauce] = useState(info.name);
    const sauceSelected = (event) => {
        if (event.target.tagName === "IMG" || event.target.tagName === "P") {
            if (event.target.parentNode.parentNode.className === "SauceSelected") {
                event.target.parentNode.parentNode.className = "Sauce";
                dispatch(DeleteSauce({ id: Pizza, Sauce: sauce }));
            }
            else {
                event.target.parentNode.parentNode.className = "SauceSelected";
                dispatch(AddSauce({ id: Pizza, Sauce: sauce }));
            }
        }
        else if (event.target.className === "SauceName" || event.target.className === "SauceImage") {
            if (event.target.parentNode.className === "SauceSelected") {
                event.target.parentNode.className = "Sauce";
                dispatch(DeleteSauce({ id: Pizza, Sauce: sauce }));

            }
            else {
                event.target.parentNode.className = "SauceSelected";
                dispatch(AddSauce({ id: Pizza, Sauce: sauce }));
            }

        }
        else if (event.target.className === "Sauce" || event.target.className === "SauceSelected") {
            if (event.target.className === "SauceSelected") {
                event.target.className = "Sauce";
                dispatch(DeleteSauce({ id: Pizza, Sauce: sauce }));

            }
            else {
                event.target.className = "SauceSelected";
                dispatch(AddSauce({ id: Pizza, Sauce: sauce }));
            }
        }

    }
    return (
        <div className='Sauce' onClick={(e,) => sauceSelected(e)}>
            <div className='CheckIcon'>
                <i className="fa-regular fa-circle-check"></i>
            </div>
            <div className='SauceImage'>
                <img src={info.image} alt="" />
            </div>
            <div className='SauceName'>
                <p>{info.name}</p>
            </div>
        </div>
    )
}

export default Sauce