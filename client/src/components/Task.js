import React from "react";
import { Container, Row } from "react-bootstrap"

const detailStyle = {
    "background-color": "lightgrey",
    "width": "80vw",
    "height": "40vh",
    "border": "1px solid black",
    "border-radius": "15px",
    "overflow": "hidden"
}

function Task() {
    return (
        <Container className="task-cont">
            <Row>
                <h3 className="my-4">Task Description</h3>
            </Row>
            <Row>
                <h4 className="my-4">Category</h4>
            </Row>
            <Row>
                <h4 className="my-4">Details</h4>
                <Container style={detailStyle}>

                </Container>
            </Row>
        </Container>
    )
}

export default Task;