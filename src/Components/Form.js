import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Clear } from '../ReduxTK/PanierSlice';


function Form() {
    const form = useRef(),
        Panier = useSelector(s => s.Panier.Data),
        Pizzas = useSelector(s => s.Pizza.Data);
    const dispatch = useDispatch(),
        navigate = useNavigate();

    const sendEmail = () => {
        emailjs.sendForm('service_o8roh87', 'template_b1t0tqe', form.current, 'hd3NZaNRcJ2uw_Ftk')
            .then((result) => {
                dispatch(Clear());
                navigate("/ThankYou");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='Form' className='GlassEffect'>
            <h3>Sisaissez vos informations</h3>
            <form ref={form}>
                <div>
                    <i className="fa-solid fa-user"></i>
                    <input type="text" name='client_fullName' placeholder='Nom et Prenom' />
                </div>
                <div>
                    <i className="fa-solid fa-phone-volume"></i>
                    <input type="tel" name='client_phone' placeholder='Numero telephone' />
                </div>
                <div>
                    <div className="AddToCartButton" onClick={sendEmail}>
                        <p>Commander</p>
                        <span className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
                <textarea name="message" hidden defaultValue={Panier.length !== 0 && Panier.map(p => `Pizza: ${Pizzas.filter(pi => pi.id === p.idPizza)[0].name}\tSauces: ${p.Sauces}\tQuantite: ${p.Quantite}\tPrix: ${p.Quantite * Pizzas.filter(pi => pi.id === p.idPizza)[0].price}DH \n`)}>
                </textarea>
                <input type="hidden" name="total_price" defaultValue={Panier.reduce((p, n) => p + (n.Quantite * Pizzas.filter(pi => pi.id === n.idPizza)[0].price), 0)} />
            </form>
        </div>
    )
}

export default Form