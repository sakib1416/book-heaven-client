import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const deleteBook = id => {
        
    }
    return (
        <div className="col-md-3">
            <img style={{height: '300px'}} src={book.imageURL} alt=""/>
            <h5>{book.name} <Link to="/products">Buy Now</Link></h5>
            {/* <button onClick={() => deleteBook(book._id)}>Delete</button> */}
        </div>
    );
};

export default Book;