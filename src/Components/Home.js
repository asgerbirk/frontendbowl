import zandobowl from '../assets/zandobowl.mp4'
export const Home = () =>{

    return(
        <div className="home">
            <video src={zandobowl} autoPlay loop muted />
        </div>


    )
}