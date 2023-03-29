import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyFooter = (props)=>{
    return (
        <div >
            <Container fluid bg="dark" variant="dark">
                <Row>
                    <Col>{props.Copyright}</Col>
                    <Col>{props.Social}</Col>
                    <Col>{props.ChiSiamo}</Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default MyFooter;