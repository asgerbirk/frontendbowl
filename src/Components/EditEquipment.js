import {Link, useNavigate, useParams} from "react-router-dom";
import {getEquipmentById, updateBeverage, updateEquipment} from "../Components/Queries";
import {useEffect, useState} from "react";


export const EditEquipment = () =>{


    //Attributes ( react hooks )


    const [equipment, setEquipment] = useState({
        type: "",
        number:"",
        size:"",
        color:""
    })

    //const queryClient = useQueryClient();
    let navigate = useNavigate();

    const {id} = useParams();

    const {type, number, size, color} = equipment;

    const onValueChange = (e) => {
        setEquipment({...equipment, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        loadEquipment().then(r => console.log(r));
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await updateEquipment(equipment,id)
        navigate("/equipmenthandler")
    }

    const loadEquipment = async () => {
        const result = await getEquipmentById(id)
        setEquipment(result.data)
    };




    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundColor: 'white'}}>
                    <h2 className="text-center m-4">Opdatering af udstyr</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
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
                                onChange={(e) => onValueChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">
                                Antal
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Indtast antal"
                                name="number"
                                value={number}
                                onChange={(e) => onValueChange(e)}
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
                                onChange={(e) => onValueChange(e)}
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
                                onChange={(e) => onValueChange(e)}
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