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
        <div className={"search"}>
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
                        <th>Navn</th>
                        <th>Email</th>
                        <th>Reservation start</th>
                        <th>Reservation end</th>
                        <th>Dato</th>
                        <th>Antal personer</th>
                        <th>Bord nr.</th>
                        <th>Antal baner</th>



                        <th></th>
                        <th>Delete</th>

                    </tr>
                    </thead>
                    <tbody>
                    {data?.data.filter((val) =>{
                        if (searchTerm == ""){
                            return val
                        }else if (val.email.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map((bookings) => (
                            <tr key={bookings.id}>
                                <td> {bookings.id} </td>
                                <td>{bookings.name}</td>
                                <td>{bookings.email}</td>
                                <td>{bookings.reservationStart}</td>
                                <td>{bookings.reservationEnd}</td>
                                <td>{bookings.date}</td>
                                <td>{bookings.numberOfPeople}</td>
                                <td>{bookings.tableNum}</td>
                                <td>{bookings.countOfLanes}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        to={`/edit/${bookings.id}`}>Edit</Link>
                                </td>
                                <td>
                                    <Button onClick={() => deleteBookingButton(bookings.id)}>Delete</Button>
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