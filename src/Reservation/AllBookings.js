import {Link} from "react-router-dom";


export const AllBookings = () =>{


    return (
        <div className={"container"}>
            <div className='py-5'>
                <div className="d-flex justify-content-center flex-wrap">
                        <Link
                        className="btn btn-primary mx-3"
                        to={"/SeeBowlingReservation"}>
                        Bowling reservationer
                        </Link>
                        <Link
                        className="btn btn-primary mx-3"
                        to={"/SeeAirhockeyReservation"}>
                        Airhockey reservationer
                        </Link>
                        <Link
                        className="btn btn-primary mx-3"
                        to={"/SeeDiningReservation"}>
                        Restaurant reservationer
                        </Link>
                </div>
            </div>
        </div>
    )

}