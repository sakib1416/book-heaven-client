import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <h1>Welcome to the admin page</h1>
            <Link to="/addBooks">Click here to Add Books</Link>
        </div>
    );
};

export default Admin;