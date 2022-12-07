import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {getBeverageById, updateBeverage} from "./Queries";


export const EditBeverages = ()  => {
    const [beverages, setBeverages] = useState({
        img: "",
        name:"",
        price:"",
        description:""
    })


    let navigate = useNavigate();

    const {id} = useParams();

    const {img, name, price, description} = beverages;



    const onValueChange = (e) => {
        setBeverages({...beverages, [e.target.name]: e.target.value})
    }


    useEffect(() => {
        loadBeverages().then(r => console.log(r));
    }, []);


    const onSubmit = async (e) => {
        e.preventDefault();
        await updateBeverage(beverages,id)
        navigate("/seebeverages")
    }

    const loadBeverages = async () => {
        const result = await getBeverageById(id)
        setBeverages(result.data)
    };

    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundColor: 'white'}}>
                    <h2 className="text-center m-4">Rediger Beverage</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Billede
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Indsæt billede link"
                                name="img"
                                value={img}
                                onChange={(e) => onValueChange(e)}/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Navn
                            </label>
                            <input
                                type={"text"}
                                step="900"
                                className="form-control"
                                placeholder="Indtast drink navn"
                                name="name"
                                value={name}
                                onChange={(e) => onValueChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Pris
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Indtast prisen på drink"
                                name="price"
                                value={price}
                                onChange={(e) => onValueChange(e)}/>
                        </div>                        <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Beskrivelse
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Indtast beskrivelse af drink"
                            name="description"
                            value={description}
                            onChange={(e) => onValueChange(e)}/>
                    </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/SeeBeverages">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );


}