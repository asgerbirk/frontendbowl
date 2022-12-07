import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import myLogo from "./bowllogo.jpg"

export const NavbarComponent = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={"#home"}>
                    <img src={myLogo}
                    width={125}
                    height={50}
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/bowlingReservation">Bowling Reservation </Nav.Link>
                    <Nav.Link as={Link} to="/airhockeyreservation">Airhockey Reservation </Nav.Link>
                    <Nav.Link as={Link} to="/diningReservation">Dining Reservation </Nav.Link>
                    <Nav.Link as={Link} to="/allBookings">Se alle reservationer </Nav.Link>
                    <Nav.Link as={Link} to="/equipmenthandler">Håndter udstyr </Nav.Link>
                    <Nav.Link as={Link} to="/beverages">Se menukort </Nav.Link>
                    <Nav.Link as={Link} to="/seebeverages">Ændr menukort </Nav.Link>
                    <Nav.Link as={Link} to="/calender">Kalender </Nav.Link>
                    <Nav.Link as={Link} to="/login">Login </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}