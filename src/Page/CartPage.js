import React, {useEffect, useState} from 'react';
import usersAPI from '../Service/usersAPI';

const CartPage = (props) => {

    const [cart, setCart] = useState([]);
    useEffect(()=>{
        usersAPI
            .getCart()
            .then(data=>{setCart(data);});
    }, []);

    return (
        <div className="container">
            <h1>CartPage</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Article</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((article, i)=>(
                            <tr key={i} className={i%2===0?"table-primary":"table-light"}>
                                <th scope="row">{article.name}</th>
                                <td>{article.brand.name}</td>
                                <td>{article.price}€</td> 
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CartPage;