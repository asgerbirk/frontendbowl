import {useEffect, useState} from "react";
import {getReservationById, updateEquipment} from "./Queries";
import {useNavigate, useParams} from "react-router-dom";



export const EditEquipment = () =>{



    const [number, setNumber] = useState(0);




    let navigate = useNavigate();

    const {id} = useParams();












    //der skal laves noget count og update på equipment.



    return
    (
        <p></p>
    )
}