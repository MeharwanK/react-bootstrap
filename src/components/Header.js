import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../assets/images/logo.png'

export const Header = () => {
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 d-flex justify-content-center align-items-center"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <div className='d-flex justify-content-center align-items-center'>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">My Profile</Nav.Link>
                        <Nav.Link href="#action3">Activity</Nav.Link>
                        <Nav.Link href="#action4">How it works</Nav.Link>
                    </div>
                    
                </Nav>
                <Form className="d-flex">
                    <Button variant="outline-success">CREATE</Button>
                    <Button variant="">SIGN IN</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </>
    )
}