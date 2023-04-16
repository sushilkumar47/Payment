import React from 'react'
import { useLocation } from 'react-router-dom'
import getStripe from '../lib/getSprite';


export default function PaymentCart() {
    let plan;
    const location = useLocation();


  async function handleCheckout() {
    // CHECKING WHICH PLAN THE USER CHOSE
    if(location.state.price == 15000){plan = process.env.REACT_APP_GOLD_PLAN_PRICE_ID}
    else if(location.state.price == 8000){plan = process.env.REACT_APP_SILVER_PLAN_PRICE_ID}
    else if(location.state.price == 1500){plan = process.env.REACT_APP_BASIC_PLAN_PRICE_ID}
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: plan, 
          quantity: 1,
        },
      ],
      mode: 'subscription',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  }

  return (
    <div>
        <h1>
            You are almost done!!!
        </h1>
        <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

