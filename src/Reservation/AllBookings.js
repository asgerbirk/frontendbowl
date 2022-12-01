import {useQuery} from "react-query";
import {deleteBooking, fetchAllBookings} from "../Components/Queries";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";

export const AllBookings = () =>{

    const[searchTerm, setSearchTerm] = useState("");

    const {data, isLoading, isError} = useQuery("bookings", fetchAllBookings);

    if (isLoading){
        return <p>is loading</p>
    }

    if (isError){
        return <p>Error</p>
    }

    const deleteBookingButton = (id) =>{
        deleteBooking(id).then(() =>  window.location.reload());
    }

    console.log(data)

    return (
        <>
        <div className={"container"}>
            <input
                type="text"
                placeholder="Søg efter email.."
                onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}
            />
        </div>

            

        <div className={"container"}>
            <div className='py-2'>
                <Button>Bowling Reservationer</Button>
                <Button>Airhockey Reservationer</Button>
                <Button>Restauratant  Reservationer</Button>
            </div>
        </div>

        <div className={"container" }>
            <div className='py-4' style={{backgroundColor: 'white'}}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Navn</th>
                        <th>Email</th>
                        <th>Reservation start</th>
                        <th>Reservation end</th>
                        <th>Dato</th>
                        <th>Antal personer</th>
                        <th>Antal baner</th>
                        <th>Bane nummer</th>

                        <th>Rediger</th>
                        <th>Slet</th>

                    </tr>
                    </thead>
                    <tbody>
                    {/* eslint-disable-next-line array-callback-return */}
                    {data?.data.filter((val) =>{
                        if (searchTerm === ""){
                            return val
                        }else if (val.email.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map((bookings) => (
                            <tr key={bookings.id}>
                                <td> {bookings.id} </td>
                                <td> {bookings.reservationType} </td>
                                <td>{bookings.name}</td>
                                <td>{bookings.email}</td>
                                <td>{bookings.reservationStart}</td>
                                <td>{bookings.reservationEnd}</td>
                                <td>{bookings.date}</td>
                                <td>{bookings.numberOfPeople}</td>
                                <td>{bookings.tableNum}</td>
                                <td>{bookings.countOfLanes}</td>
                                <td>{bookings.laneNumber}</td>

                                <td>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        to={`/editBowlingReservation/${bookings.id}`}>Rediger</Link>
                                </td>
                                <td>
                                    <Button onClick={() => deleteBookingButton(bookings.id)}>Slet</Button>
                                </td>
                            </tr>

                        ))
                    }
                    </tbody>
                </Table>
            </div>
        </div>
            </>
    )

}