import zandobowl from '../assets/zandobowl.mp4'
export const Home = () =>{

    return(
        <div className="home">
            <div className="overlay"></div>
            <video src={zandobowl} autoPlay loop muted />
            <div className="welcome">
                <h1>Velkommen til XPBowl</h1>
                <h4>Klik her for at booke en tid</h4>

            </div>

        </div>


    )
}