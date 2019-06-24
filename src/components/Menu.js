import React from 'react'
// import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const makeMenuItem = (url, meta) => (
    <LinkContainer exact to={url}>
        <Nav.Link>{meta}</Nav.Link>
    </LinkContainer>
)
const Menu = () => {
    return (
        <div id="navigation">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {makeMenuItem("/", "HOME")}
                        {makeMenuItem("/about", "ABOUT")}
                        {makeMenuItem("/posts", "POSTS")}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <br/>


        </div>
    )
}

export default Menu;