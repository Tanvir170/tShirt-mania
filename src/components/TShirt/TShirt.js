import React from 'react';
import './TShirt.css'

const TShirt = ({handleAddToCart, tShirt}) => {
    const {name, picture, price} = tShirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <h4>Price: ${price}</h4>
            <button onClick={()=>handleAddToCart (tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;