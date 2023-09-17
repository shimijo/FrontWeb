import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  return (
    <div>
        <header className="container mt-4" id="menu">
        <nav className="navbar navbar-expand-lg">
            <div id="Menu" className="container-fluid ">
                <a className="navbar-brand" href="#">
                    <img src="./src/assets/img/ecobuildlogo.png" alt="ecobuildlogo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto ">
                        <a className="nav-link fw-bold " href="#menu">Menu</a>
                        <a className="nav-link fw-bold" href="#projetos">Projetos</a>
                        <a className="nav-link fw-bold" href="#benefícios">Benefícios</a>
                        <a className="nav-link fw-bold" href="#EcoBuild">EcoBuild</a>
                        <a className="nav-link fw-bold" href="#missão">Missão</a>
                        <a className="nav-link fw-bold" href="#feedback">Feedback</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>


    </div>
  )
}

export default Header