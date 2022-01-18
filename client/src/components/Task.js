import React from "react";
import { Container, Row } from "react-bootstrap"

function Task() {
    return (
        <Container>
            <Row>
                Task Description
            </Row>
            <Row>
                Category
            </Row>
            <Row>
                Details
            </Row>
        </Container>
    )
}

export default Task;