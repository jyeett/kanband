import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Board from "./Board";

function Project() {
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <h1 className="text-center my-5">PROJECT NAME</h1>
                </Col>
            </Row>
            <Row className="proj-btn" style={{"margin-bottom": "35px"}}>
                <Col className="d-flex justify-content-end">
                    <Button>Add Member</Button>
                </Col>
            </Row>
            <Row>
                <Board />
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button className="my-5">Add Task</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Project;