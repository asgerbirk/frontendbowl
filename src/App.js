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

import {Calender} from "./Components/Calender";




import {Beverages} from "./Components/Beverages";
import {EditBeverages} from "./Components/EditBeverages";
import {SeeBeverages} from "./Components/SeeBeverages";
import {CreateEquipment} from "./Components/CreateEquipment";
import {EquipmentHandler} from "./Components/EquipmentHandler";
import {EditEquipment} from "./Components/EditEquipment";


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
                <Route exact path ="/equipment" element={<Equipment/>}/>
                <Route exact path ="/equipmenthandler" element={<EquipmentHandler/>}/>
                <Route exact path ="/editequipment/:id" element={<EditEquipment/>}/>
                <Route exact path ="/createEquipment" element={<CreateEquipment/>}/>
                <Route exact path ="/beverages" element={<Beverages/>}/>
                <Route exact path ="/calender" element={<Calender/>}/>
                <Route exact path ="/SeeBeverages" element={<SeeBeverages/>}/>
                <Route exact path ="/EditBeverages/:id" element={<EditBeverages/>}/>
                <Route exact path ="/seeAirhockeyReservation" element={<SeeAirhockeyReservation/>}/>
                <Route exact path ="/editBowlingReservation/:id" element={<EditBowlingReservation/>}/>
                <Route path = "*" element={<h1>PAGE NOT FOUND</h1>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
