import React from 'react';
import './Product.css';

import { useStateValue } from "./StateProvider";

function Product({id , title , image , price , rating}) {

    const [{basket} , dispatch] = useStateValue();

    const addToBasket = () =>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });


    };


    return (
        <div className="product">
            
            <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">
                      <strong>{price}</strong>
                      <small>₹</small>
                    </p>
            
                    <div className="product__rating">
                    {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                    }
                    </div>
            
            </div>        

                <img src={image} alt=""/>       
                <button onClick={addToBasket}>Add to Basket</button>  
            
                 
        </div>
    )
}

export default Product