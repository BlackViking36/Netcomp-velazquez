import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    return (
        <>
        <div>
            <Button variant="secondary" size="sm">
                <img src="./img/cart.png" alt="cart" style= {{width: "30px"}}/>
            </Button>
        </div>
        </>
    );
};

export default CartWidget