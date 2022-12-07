import {useQuery} from "react-query";
import {
    addOneEquipment,
    deleteEquipment,
    deleteOneEquipment,
    fetchEquipment,
    getEquipmentById,
    updateEquipment
} from "./Queries";
import {Button, Table} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const Equipment = () =>{

    const [searchTerm, setSearchTerm] = useState("");

    const {data, isLoading, isError} = useQuery("equipment", fetchEquipment);

    if (isLoading){
        return <p>is loading</p>
    }

    if (isError){
        return <p>Error</p>
    }
    console.log(data)

    return(

        <>
        <div className={"container"}>
            <input
                type="text"
                placeholder="Søg..."
                onChange={(event) =>{
                    setSearchTerm(event.target.value)
                }}
            />
        </div>

        <div className={"container" }>
            <div className='py-4' style={{backgroundColor: 'white'}}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Antal</th>
                        <th>Størelse</th>
                        <th>Farve</th>
                        <th>Rediger</th>
                        <th>Slet</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* eslint-disable-next-line array-callback-return */}
                    {data?.data.filter((val) =>{
                        if (searchTerm === ""){
                            return val
                        }else if (val.equipmentType.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map((equipment) => (
                        <tr key={equipment.id}>
                            <td>{equipment.id} </td>
                            <td>{equipment.equipmentType} </td>
                            <td>{equipment.number} </td>
                            <td>{equipment.size}</td>
                            <td>{equipment.color}</td>
                            <td>
                                <Button onClick= {() => addOneEquipment(equipment.id)}>Tilføj 1</Button>
                                <Button onClick={() => deleteOneEquipment(equipment.id)}>Slet 1</Button>
                                <Link
                                    className="btn btn-primary mx-2"
                                    to={`/equipment/${equipment.id}`}>Slet 1</Link>
                            </td>
                            <td>
                                <Button onClick={() => deleteEquipment(equipment.id)}>Slet</Button>
                            </td>
                        </tr>

                    ))
                    }
                    </tbody>
                </Table>
            </div>
        </div>

            </>


    )
}