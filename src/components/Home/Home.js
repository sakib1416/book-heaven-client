import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://desolate-atoll-12069.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div className="row">
            {
                books.map(book =><Book book={book}></Book>)
            }
        </div>
    );
};

export default Home;