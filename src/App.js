import {NavbarComponent} from "./Components/NavbarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BowlingReservation} from "./Reservation/BowlingReservation";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./Components/Home";
import {AllBookings} from "./Reservation/AllBookings";
import {EditBowlingReservation} from "./Reservation/EditBowlingReservation";

function App() {

  return (
    <div className="App">
        <Router>
            <NavbarComponent/>
            <Routes>
                <Route exact path ="/" element={<Home/>}/>
                <Route exact path ="/bowlingReservation" element={<BowlingReservation/>}/>
                <Route exact path ="/allBookings" element={<AllBookings/>}/>
                <Route exact path ="/editBowlingReservation/:id" element={<EditBowlingReservation/>}/>
                <Route path = "*" element={<h1>PAGE NOT FOUND</h1>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
