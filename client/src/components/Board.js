import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import TaskCard from "./TaskCard";

const boardStyle = {
    "background-color": "lightgrey",
    "width": "100%",
    "height": "60vh",
    "border": "1px solid black",
    "border-radius": "15px",
    "overflow": "hidden"
}

const colStyle = {
    "border-left": "1px solid black",
    "border-right": "1px solid black",
    "height": "60vh",
    "flex-direction": "column"
}

function Board() {
    return (
        <Container style={boardStyle}>
            <Row>
                <Col className="d-flex align-items-center" style={{"flex-direction": "column", "height": "column", "border-right": "1px solid black"}}>
                    <h5 className="my-2">BACKLOG</h5>
                    <TaskCard />
                </Col>
                <Col className="d-flex align-items-center" style={colStyle}>
                    <h5 className="my-2">TO DO</h5>
                </Col>
                <Col className="d-flex align-items-center" style={colStyle}>
                    <h5 className="my-2">IN PROGRESS</h5>
                </Col>
                <Col className="d-flex align-items-center" style={colStyle}>
                    <h5 className="my-2">IN REVIEW</h5>
                </Col>
                <Col className="d-flex align-items-center" style={{"flex-direction": "column", "height": "column", "border-left": "1px solid black"}}>
                    <h5 className="my-2">DONE</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default Board;