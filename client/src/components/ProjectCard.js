import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

function ProjectCard({name}) {
    return (
        <Card className="my-5 mx-3" style={{width: '18rem', height: '13rem'}}>
            <Card.Body className="card-style">
                <Row>
                    <Card.Title className="my-3">{name}</Card.Title>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Button variant="primary">Edit</Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button variant="danger">Delete</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;