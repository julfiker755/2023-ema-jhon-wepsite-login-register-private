import React from 'react';

const Cart = ({cart}) => {
    let total=0
    let Shipping=0;
    let quantity=0;
    for(const product of cart){
        quantity=quantity+product.quantity
       total=total+product.price*product.quantity
       Shipping=Shipping+product.shipping*product.quantity
    }
    const tax=parseFloat(total*10/100);
    const Subtotal=total+Shipping+tax
    return (
        <div className='space-y-2 sticky top-[60px]'>
            <h1 className='text-[25px] text-[#f36d3c] font-bold'>Order Summary</h1>
            <h2>Selected Items:{quantity}</h2>
            <h3>Total Price: ${total}</h3>
            <h4>Total Shipping Charge: $ {Shipping}</h4>
            <h5>Tax:{tax}</h5>
            <h1>Grand Total:${Subtotal}</h1>
        </div>
    )
};

export default Cart;