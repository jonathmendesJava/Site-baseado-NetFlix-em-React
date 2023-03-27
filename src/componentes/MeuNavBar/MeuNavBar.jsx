import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png'


const MeuNavbar = () => {
  return (
    
       <Navbar expand="lg" className='navbar-dark'>
            <Container>
                <Link to='/' className='navbar-brand me-4'>
                    <img src={ logo } alt="Logo" width="140px"/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Início</NavLink>
                        <NavLink to="/series" className='nav-link'>Séries</NavLink>
                        <NavLink to="/filmes" className='nav-link'>Filmes</NavLink>
                        <NavLink to="/bombando" className='nav-link'>Bombando</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}


export default MeuNavbar