import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const [orders, setOrders] = useState([{}]);

    useEffect(()=>{
        fetch("http://localhost:5000/orders")
        .then(response => response.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            {
                orders.map(order => <OrderDetails order = {order}></OrderDetails>)
            }
        </div>
    );
};

export default Orders;