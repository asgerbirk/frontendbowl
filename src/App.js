import {NavbarComponent} from "./Components/NavbarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BowlingReservation} from "./Reservation/BowlingReservation";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./Components/Home";

function App() {

  return (
    <div className="App">
        <Router>
            <NavbarComponent/>
            <Routes>
                <Route exact path ="/" element={<Home/>}/>
                <Route exact path ="/bowlingReservation" element={<BowlingReservation/>}/>
                <Route path = "*" element={<h1>PAGE NOT FOUND</h1>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
