import {NavbarComponent} from "./Components/NavbarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CreateBowlingReservation} from "./Reservation/CreateBowlingReservation";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./Components/Home";
import {AllBookings} from "./Reservation/AllBookings";
import {EditBowlingReservation} from "./Reservation/EditBowlingReservation";
import {SeeBowlingReservation} from "./Reservation/SeeBowlingReservation";
import {SeeDiningReservation} from "./Reservation/SeeDiningReservation";
import {Equipment} from "./Components/Equipment";
import {CreateAirhockeyReservation} from "./Reservation/CreateAirhockeyReservation";
import {CreateDiningReservation} from "./Reservation/CreateDiningReservation";
import {SeeAirhockeyReservation} from "./Reservation/SeeAirhockeyReservation";
import {Beverages} from "./Components/Beverages";

function App() {

  return (
    <div className="App">
        <Router>
            <NavbarComponent/>
            <Routes>
                <Route exact path ="/" element={<Home/>}/>
                <Route exact path ="/bowlingReservation" element={<CreateBowlingReservation/>}/>
                <Route exact path ="/airhockeyReservation" element={<CreateAirhockeyReservation/>}/>
                <Route exact path ="/diningReservation" element={<CreateDiningReservation/>}/>
                <Route exact path ="/allBookings" element={<AllBookings/>}/>
                <Route exact path ="/seeBowlingReservation" element={<SeeBowlingReservation/>}/>
                <Route exact path ="/seeDiningReservation" element={<SeeDiningReservation/>}/>
                <Route exact path ="/equipment" element={<Equipment/>}/>
                <Route exact path ="/beverages" element={<Beverages/>}/>
                <Route exact path ="/seeAirhockeyReservation" element={<SeeAirhockeyReservation/>}/>
                <Route exact path ="/editBowlingReservation/:id" element={<EditBowlingReservation/>}/>
                <Route path = "*" element={<h1>PAGE NOT FOUND</h1>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
