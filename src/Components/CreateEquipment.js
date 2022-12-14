import {Link, useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "react-query";
import {createEquipment} from "../Components/Queries";
import {useState} from "react";


export const CreateEquipment = () =>{


    //Attributes ( react hooks )
    const [equipmentType, setEquipmentType] = useState("");
    const [number, setNumber] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");

    const queryClient = useQueryClient();
    let navigate = useNavigate();

    const {mutate, isError, isLoading} = useMutation(createEquipment, {onSuccess: () => {
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
        mutate({equipmentType, number, size, color})
        navigate("/equipment")
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
                            <select className="container" onChange={(e) => setEquipmentType(e.target.value)}>
                                <option value={"BOWLINGBALL"}> Bowling bold </option>
                                <option value={"SHOES"}> Sko </option>
                                <option value={"BOWLINGCONES"}> Bowling kegler </option>
                                <option value={"HOCKEYPUK"}> Hockeypuk </option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Antal
                            </label>
                            <input
                                type={"number"}
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
                                St??rrelse/KG
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Indtast st??rrelse / KG"
                                name="size"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="reservationStart" className="form-label">
                                Farve p?? udstyr
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
                            Bekr??ft
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