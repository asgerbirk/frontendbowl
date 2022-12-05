import {useQuery} from "react-query";
import {deleteBeverages, fetchBeverages} from "./Queries";
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";

export const Beverages = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const {data, isLoading, isError} = useQuery("beverages", fetchBeverages);

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
                            <th>IMG</th>
                            <th>Navn</th>
                            <th>Pris</th>
                            <th>Beskrivelse</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* eslint-disable-next-line array-callback-return */}
                        {data?.data.filter((val) =>{
                            if (searchTerm === ""){
                                return val
                            }else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }
                        }).map((beverages) => (
                            <tr key={beverages.id}>
                                <td><img src={beverages.imgURL} alt={""} border={3} height={100} width={100}/></td>
                                <td>{beverages.name} </td>
                                <td>{beverages.price} </td>
                                <td>{beverages.description}</td>
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