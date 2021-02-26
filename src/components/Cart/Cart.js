import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)
    
    
    let shipping = 0;
    if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping = 4.99;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }
     
    
    
    const tax = (totalPrice / 10);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);
    const precision = price => {
        const value = Number(price.toFixed(2))
        return value;
    }
    return (
        <div className="cart-card">
            <h3>Order Summary: </h3>
            <p>Items ordered: $ {cart.length}</p>
            <p>Product Price: $ {precision(totalPrice)}</p>
            <p><small>Shipping Cost: $ {precision(shipping)}</small></p>
            <p><small>(Tax + Vat): $ {tax}</small></p>
            <p>Total Price: $ {grandTotal}</p>
        </div>
    );
};

export default Cart;