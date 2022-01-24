import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('currentUser'));

    function goHome()
    {
        navigate("/home");
    }
    function goProfileScreen(){
        navigate("/profile");
    }

    function logout() {
        localStorage.removeItem('currentUser');
        navigate("/login");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold ms-4" href="#" onClick={goHome}>RentHouse</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-5">
                            {
                                user ? (
                                    <>
                                        <Dropdown className='me-5'> 
                                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                                {user.username}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={goProfileScreen}>On Rents</Dropdown.Item>
                                                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </>

                                ) : (


                                    <>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="/register">Register</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/login">Login</a>
                                        </li>
                                    </>

                                )











                            }


                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;