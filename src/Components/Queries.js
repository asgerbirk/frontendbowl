import axios from "axios";

export const fetchAllBowlingReservations = async () =>{
    return await axios.post("")
}

export const createBowlingReservation = async (bowlingReservation) =>{
    return await axios.post("http://localhost:8080/api/v1/reservations/bowling", bowlingReservation)
}

export const fetchAllBookings = async () =>{
    return await axios.get("http://localhost:8080/api/v1/reservations")
}

export const deleteBooking = async (id) =>{
    return await axios.delete(`http://localhost:8080/api/v1/reservations/${id}`)
}