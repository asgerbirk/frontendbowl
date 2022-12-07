import {useQuery} from "react-query";
import {deleteBooking, fetchAllDiningBookings} from "../Components/Queries";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";

export const SeeDiningReservation = () =>{

    const[searchTerm, setSearchTerm] = useState("");

    const {data, isLoading, isError} = useQuery("bookings", fetchAllDiningBookings);

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
                    placeholder="Søg..."
                    onChange={(event) =>{
                        setSearchTerm(event.target.value)
                    }}
                />
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
                            <th>Bord nummer</th>

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