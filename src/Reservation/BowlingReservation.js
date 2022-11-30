import {Link, useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "react-query";
import {createBowlingReservation} from "../Components/Queries";
import {useState} from "react";

export const BowlingReservation = () =>{


    //Attributes ( react hooks )
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reservationStart, setReservationStart] = useState("");
    const [reservationEnd, setReservationEnd] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [date, setDate] = useState("");
    const [countOfLanes, setCountOfLanes] = useState("");
    const [laneNum1, setLaneNum1] = useState("");






    const queryClient = useQueryClient();
    let navigate = useNavigate();

    const {mutate, isError, isLoading} = useMutation(createBowlingReservation, {onSuccess: () => {
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
            mutate({name, email, reservationStart, reservationEnd, numberOfPeople,date,countOfLanes, laneNum1})
            navigate("/")
        }




    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundColor: 'white'}}>
                    <h2 className="text-center m-4">Bowling reservation</h2>
                    <form onSubmit={handleSubmit}>
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
                                onChange={(e) => setName(e.target.value)}
                            />
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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Date" className="form-label">
                                Dato
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
                                Booking start tidspunkt
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
                                Booking slut tidspunkt
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
                                Antal spillere
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Antal spillere"
                                name="numberOfPersons"
                                value={numberOfPeople}
                                onChange={(e) => setNumberOfPeople(e.target.value)}
                            />
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
                                onChange={(e) => setCountOfLanes(e.target.value)}
                            />
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
                                value={laneNum1}
                                onChange={(e) => setLaneNum1(e.target.value)}
                            />
                        </div>
                        <button  type="submit" className="btn btn-outline-primary">
                            Bekræft booking
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Aflys
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}