import {Link} from "react-router-dom";


export const AllBookings = () =>{


    return (
        <div className={"container"}>
            <div className='py-2'>

                <Link
                    className="btn btn-primary mx-2"
                    to={"/SeeBowlingReservation"}>
                    Bowling reservationer
                </Link>
                <Link
                    className="btn btn-primary mx-2"
                    to={"/SeeAirhockeyReservation"}>
                    Airhockey reservationer
                </Link>
                <Link
                className="btn btn-primary mx-2"
                to={"/SeeDiningReservation"}>
                Restaurant reservationer
            </Link>
            </div>
        </div>
    )

}