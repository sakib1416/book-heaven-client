import React from 'react';

const OrderDetails = (props) => {
    console.log(props.order);
    return (
        <div>
            <h1>Order Details page</h1>
            <div className="col-md-3">
                <img style={{height: '300px'}} src={props.order.imageURL} alt=""/>
                <h5>{props.order.name}</h5>
                <p>Customer: {props.order.customerName}</p>
                <p>Purchased in: {props.order.date}</p>
                <p>Paid Money: ${props.order.price}</p>
                {/* <button onClick={() => deleteBook(book._id)}>Delete</button> */}
            </div>
        </div>
    );
};

export default OrderDetails;