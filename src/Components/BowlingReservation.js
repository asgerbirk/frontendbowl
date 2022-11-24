import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "react-query";
import {fetchAllBowlingReservations} from "./Queries";

export const BowlingReservation = () =>{


    const queryClient = useQueryClient();
    let navigate = useNavigate();

/*
    const {mutate, isError, isLoading,reset} = useMutation("reservations", fetchAllBowlingReservations{
        onSuccess: () => {
            queryClient.invalidateQueries("riders").then(r => console.log(r));
        }
    });

    if (isError){
        return <p>Error</p>
    }

    if (isLoading){
        return  <p>is loading</p>

    }


    const handleSubmit = async (e) =>{
        e.preventDefault();
        //mutate({name,age,finalTime,mountainPoint,sprintPoint})
        //navigate("/")
    }

 */


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
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