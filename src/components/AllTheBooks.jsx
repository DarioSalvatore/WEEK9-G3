import fantasy from "../data/fantasy.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const AllTheBooks = () => {
  return (
    <>
      <Container>
        <Row md={4}>
          {fantasy.map((book) => (
            <Col key={book.asin}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <div>
                    {book.category}
                    <hr />
                    {book.price}
                  </div>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllTheBooks;
