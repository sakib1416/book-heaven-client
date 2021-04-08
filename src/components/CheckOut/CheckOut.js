import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const {id} = useParams();
    const [cart, setCart] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch("https://desolate-atoll-12069.herokuapp.com/books/"+id)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCart(data);
        })
    },[])

    const handlePurchase = () => {
        const newOrder = {...cart};
        newOrder.date = new Date();
        newOrder.customerName = loggedInUser.name;
        fetch("https://desolate-atoll-12069.herokuapp.com/addOrder", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(response => response.json())
        .then(data => {
            alert("Thanks for your order")
        })
        
    }
    
    return (
        <div>
            <h1>CheckOut page</h1>
            <p>Selected Book: {cart.name}</p>
            <p>Book Price: ${cart.price}</p>
            <Button onClick={handlePurchase} variant="success">Confirm Purchase</Button>
        </div>
    );
};

export default CheckOut;