import axios from "axios";

export const fetchAllBowlingReservations = async () =>{
    return await axios.post("")
}

export const createBowlingReservation = async () =>{
    return await axios.post("http://localhost:8080/api/v1/reservations/bowling")
}