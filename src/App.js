import {NavbarComponent} from "./Components/NavbarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CreateBowlingReservation} from "./Reservation/CreateBowlingReservation";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./Components/Home";
import {AllBookings} from "./Reservation/AllBookings";
import {EditBowlingReservation} from "./Reservation/EditBowlingReservation";
import {SeeBowlingReservation} from "./Reservation/SeeBowlingReservation";

function App() {

  return (
    <div className="App">
        <Router>
            <NavbarComponent/>
            <Routes>
                <Route exact path ="/" element={<Home/>}/>
                <Route exact path ="/bowlingReservation" element={<CreateBowlingReservation/>}/>
                <Route exact path ="/allBookings" element={<AllBookings/>}/>
                <Route exact path ="/seeBowlingReservation" element={<SeeBowlingReservation/>}/>
                <Route exact path ="/editBowlingReservation/:id" element={<EditBowlingReservation/>}/>
                <Route path = "*" element={<h1>PAGE NOT FOUND</h1>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
