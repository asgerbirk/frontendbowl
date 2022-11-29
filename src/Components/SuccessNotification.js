import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";

export const successNotification = () =>{

    return (
        <div className="App">
            <Container className='p-4'>
                <Alert variant="success">Data is saved sucessfully</Alert>
            </Container>
        </div>
    );
}