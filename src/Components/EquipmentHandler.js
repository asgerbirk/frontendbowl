import {Link} from "react-router-dom";


export const EquipmentHandler = () =>{


    return (
        <div className={"container"}>
            <div className='py-5'>
                <div className="d-flex justify-content-center flex-wrap">
                    <Link
                        className="btn btn-primary mx-3"
                        to={"/Equipment"}>
                        Se alt udstyr
                    </Link>
                    <Link
                        className="btn btn-primary mx-3"
                        to={"/CreateEquipment"}>
                        Opret nyt udstyr
                    </Link>
                </div>
            </div>
        </div>
    )

}