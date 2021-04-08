import React, { useContext } from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                    {/* <Navbar.Brand ><Link to ="/">Easy-Rides</Link></Navbar.Brand> */}
                    <Navbar.Brand ><Link to="/">Book Heaven</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            </Nav>
                            <Form inline>
                                {/* IMPORT NavLink from react-router-dom */}
                                <NavLink style={{padding: '5px'}} to="/">Home</NavLink>
                                <NavLink style={{padding: '5px'}} to="/orders">Orders</NavLink>
                                <NavLink style={{padding: '5px'}} to="/deals">Deals</NavLink>
                                {
                                    loggedInUser.email && <NavLink style={{padding: '5px'}} to="/admin">Admin</NavLink>
                                }
                                {
                                    
                                    loggedInUser.email ? <NavLink style={{padding: '5px'}} to="/login">Log Out</NavLink> : <NavLink style={{padding: '5px'}} to="/login">Login</NavLink>
                                }
                            </Form>
                        </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;