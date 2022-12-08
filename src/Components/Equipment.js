import {useQuery} from "react-query";
import {

    deleteEquipment,

    fetchEquipment,

} from "./Queries";
import {Button, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

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
                            <td>{equipment.number}</td>
                            <td>{equipment.size}</td>
                            <td>{equipment.color}</td>
                            <td><Link
                                className="btn btn-primary mx-2"
                                to={`/editequipment/${equipment.id}`}>Rediger</Link>
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