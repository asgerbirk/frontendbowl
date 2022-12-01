import axios from "axios";


export const createBowlingReservation = async (bowlingReservation) =>{
    return await axios.post("http://localhost:8080/api/v1/bowlingReservation", bowlingReservation)
}

export const createAirhockeyReservation = async (airhockeyReservation) => {
    return await axios.post("http://localhost:8080/api/v1/airhockeyReservation", airhockeyReservation)
}

export const createDiningReservation = async (diningReservation) => {
    return await axios.post("http://localhost:8080/api/v1/diningReservation", diningReservation)
}

export const fetchAllBookings = async () =>{
    return await axios.get("http://localhost:8080/api/v1/bowlingReservation")
}

export const fetchAllAirhockeyBookings = async () =>{
    return await axios.get("http://localhost:8080/api/v1/airhockeyReservation")
}

export const deleteBooking = async (id) =>{
    return await axios.delete(`http://localhost:8080/api/v1/bowlingReservation/${id}`)
}
export const getReservationById = async (id) =>{
    return await axios.get(`http://localhost:8080/api/v1/bowlingReservation/${id}`)
}

export const updateReservation = async (reservation, id) => {
    return await axios.put(`http://localhost:8080/api/v1/bowlingReservation/${id}`, reservation).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err)
    })
}

export const fetchEquipment = async () =>{
    return await axios.get("http://localhost:8080/api/v1/equipment")
}

export const deleteEquipment = async (id) =>{
    return await axios.delete(`http://localhost:8080/api/v1/equipment/${id}`)
}