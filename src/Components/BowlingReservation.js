import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "react-query";
import {createBowlingReservation, fetchAllBowlingReservations} from "./Queries";
import {useState} from "react";

export const BowlingReservation = () =>{


    const queryClient = useQueryClient();
    let navigate = useNavigate();


    //Attributes ( react hooks )
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reservationStart, setReservationStart] = useState("");
    const [reservationEnd, setReservationEnd] = useState("");
    const [numberOfPersons, setNumberOfPersons] = useState("");

    //Sub Attributes for subclass bowlingreservations
    const [countOfLanes, setCountOfLanes] = useState("");
    const [laneNum1, setLaneNum1] = useState("");
    const [laneNum2, setLaneNum2] = useState("");
    const [laneNum3, setLaneNum3] = useState("");
    const [laneNum4, setLaneNum4] = useState("");


    const {mutate, isError, isLoading, reset} = useMutation(createBowlingReservation, {onSuccess: () => {
        queryClient.invalidateQueries("reservations");
        }});
    if (isError){
        return <p>Error</p>
    }

        if (isLoading){
            return  <p>is loading</p>

        }


        const handleSubmit = async (e) =>{
            e.preventDefault();
            mutate({name, email, reservationStart, reservationEnd, numberOfPersons, countOfLanes, laneNum1, laneNum2, laneNum3, laneNum4})
            navigate("/")
        }




    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
        </Form>
    );
}