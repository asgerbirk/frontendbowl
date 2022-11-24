import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

export const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/bowlingReservation">Bowling Reservation </Nav.Link>
                    <Nav.Link as={Link} to="/airhockeyreservation">Airhockey Reservation </Nav.Link>
                    <Nav.Link as={Link} to="/diningReservation">Dining Reservation </Nav.Link>
                    <Nav.Link as={Link} to="/login">Login </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}