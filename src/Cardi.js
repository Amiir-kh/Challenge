import { findByLabelText } from "@testing-library/react";
import { Card, Button } from "react-bootstrap";


const Cardi = ({ pro }) => {
return (
    <div>
        <div>
    <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={pro.image} />
        <Card.Body>
        <Card.Title>{pro.title}</Card.Title>
        <Card.Text>{pro.des}</Card.Text>
        <Button variant="primary">{pro.linkName}</Button>
        </Card.Body>
    </Card>
    </div>
    </div>
);
};

export default Cardi;