import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {getReservationById, updateReservation} from "../Components/Queries";


export const EditBowlingReservation = ()  => {
    const [reservation, setReservation] = useState({
        name:"",
        email:"",
        date: "",
        reservationStart: "",
        reservationEnd: "",
        numberOfPeople:"",
        laneNumber: "",
        countOfLanes:""
    })


    let navigate = useNavigate();

    const {id} = useParams();

    const {name, email,date, reservationStart, reservationEnd, numberOfPeople, laneNumber,countOfLanes} = reservation;



    const onValueChange = (e) => {
        setReservation({...reservation, [e.target.name]: e.target.value})
    }


    useEffect(() => {
        loadReservation().then(r => console.log(r));
    }, []);


    const onSubmit = async (e) => {
    e.preventDefault();
    await updateReservation(reservation,id)
    navigate("/allBookings")
}

    const loadReservation = async () => {
  const result = await getReservationById(id)
        setReservation(result.data)
    };

    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundColor: 'white'}}>
                    <h2 className="text-center m-4">Rediger reservation</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Navn
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Indtast dit navn"
                                name="name"
                                value={name}
                                onChange={(e) => onValueChange(e)}/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Email
                            </label>
                            <input
                                type={"text"}
                                step="900"
                                className="form-control"
                                placeholder="Indtast din email"
                                name="email"
                                value={email}
                                onChange={(e) => onValueChange(e)}/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Dato
                            </label>
                            <input
                                type={"date"}
                                className="form-control"
                                placeholder="Indtast dato"
                                name="date"
                                value={date}
                                onChange={(e) => onValueChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Start
                            </label>
                            <input
                                type={"time"}
                                className="form-control"
                                placeholder="Indtast start"
                                name="reservationStart"
                                value={reservationStart}
                                onChange={(e) => onValueChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Slut
                            </label>
                            <input
                                type={"time"}
                                className="form-control"
                                placeholder="Indtast slut"
                                name="reservationEnd"
                                value={reservationEnd}
                                onChange={(e) => onValueChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="NumberOfPerson" className="form-label">
                                Antal spillere
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Antal spillere"
                                name="numberOfPersons"
                                value={numberOfPeople}
                                onChange={(e) => onValueChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="countOfLanes" className="form-label">
                                Antal baner
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Antal baner"
                                name="countOfLanes"
                                value={countOfLanes}
                                onChange={(e) => onValueChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="laneNumber" className="form-label">
                                Bane nummer
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="laneNumber"
                                name="laneNumber"
                                value={laneNumber}
                                onChange={(e) => onValueChange(e)}/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/allBookings">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );


}