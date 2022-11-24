import {Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "react-query";
import {createBowlingReservation, fetchAllBowlingReservations} from "./Queries";
import {useState} from "react";

export const BowlingReservation = () =>{


    //Attributes ( react hooks )
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reservationStart, setReservationStart] = useState("");
    const [reservationEnd, setReservationEnd] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [date, setDate] = useState("");

    //Sub Attributes for subclass bowlingreservations
    const [countOfLanes, setCountOfLanes] = useState("");
    const [laneNum1, setLaneNum1] = useState("");
    const [laneNum2, setLaneNum2] = useState("");
    const [laneNum3, setLaneNum3] = useState("");
    const [laneNum4, setLaneNum4] = useState("");


    const queryClient = useQueryClient();
    let navigate = useNavigate();

    const {mutate, isError, isLoading, reset} = useMutation(createBowlingReservation, {onSuccess: () => {
        queryClient.invalidateQueries("reservations").then(r => console.log(r));
        }});

      if (isError){
        return <p>Error</p>
     }

        if (isLoading){
            return  <p>is loading</p>
        }


        const handleSubmit = async (e) =>{
            e.preventDefault();
            mutate({name, email, reservationStart, reservationEnd, numberOfPeople,date})
            navigate("/")
        }




    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundColor: 'white'}}>
                    <h2 className="text-center m-4">Register User</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Email
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter your email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Date" className="form-label">
                                Date
                            </label>
                            <input
                                type={"date"}
                                className="form-control"
                                placeholder="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="reservationStart" className="form-label">
                                Reservation start
                            </label>
                            <input
                                type={"time"}
                                className="form-control"
                                placeholder="reservation start"
                                name="reservationStart"
                                value={reservationStart}
                                onChange={(e) => setReservationStart(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="reservationEnd" className="form-label">
                                Reservation end
                            </label>
                            <input
                                type={"time"}
                                className="form-control"
                                placeholder="Reservation end"
                                name="reservationEnd"
                                value={reservationEnd}
                                onChange={(e) => setReservationEnd(e.target.value)}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="NumberOfPerson" className="form-label">
                                Number of persons
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="number of persons"
                                name="numberOfPersons"
                                value={numberOfPeople}
                                onChange={(e) => setNumberOfPeople(e.target.value)}
                            />
                        </div>
                        <button onClick={reset} type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}