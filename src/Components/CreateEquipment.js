import {Link, useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "react-query";
import {createBowlingReservation} from "../Components/Queries";
import {useState} from "react";


export const CreateEquipment = () =>{


    //Attributes ( react hooks )
    const [type, setType] = useState("");
    const [number, setNumber] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");

    const queryClient = useQueryClient();
    let navigate = useNavigate();

    const {mutate, isError, isLoading} = useMutation(createBowlingReservation, {onSuccess: () => {
            queryClient.invalidateQueries("equipment").then(r => console.log(r));
        }});

    if (isError){
        return <p>Error</p>
    }

    if (isLoading){
        return  <p>is loading</p>
    }


    const handleSubmit = async (e) =>{
        e.preventDefault();
        mutate({type, number, size, color})
        navigate("/")
    }

    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundColor: 'white'}}>
                    <h2 className="text-center m-4">Oprettelse af udstyr</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Type
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Indtast udstyrs-typen"
                                name="type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Antal
                            </label>
                            <input
                                type={"text"}
                                step="900"
                                className="form-control"
                                placeholder="Indtast antal"
                                name="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Date" className="form-label">
                                Størrelse/KG
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Indtast størrelse / KG"
                                name="size"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="reservationStart" className="form-label">
                                Farve på udstyr
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Indtast farve"
                                name="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </div>
                        <button  type="submit" className="btn btn-outline-primary">
                            Bekræft
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