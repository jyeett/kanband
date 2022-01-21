import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import TaskCard from "./TaskCard";

const boardStyle = {
    "backgroundColor": "lightgrey",
    "width": "100%",
    "height": "60vh",
    "border": "1px solid black",
    "borderRadius": "15px",
    "overflow": "hidden"
}

const colStyle = {
    "borderLeft": "1px solid black",
    "borderRight": "1px solid black",
    "height": "60vh",
    "flexDirection": "column"
}

function Board({taskList}) {
    const taskCards = taskList.length > 0 ? taskList.map(task => {
        return <TaskCard key={task.id} task={task}/>
    }) : null

    return (
        <Container style={boardStyle}>
            <Row>
                <Col className="d-flex align-items-center" style={{"flexDirection": "column", "borderRight": "1px solid black"}}>
                    <h5 className="my-2">BACKLOG</h5>
                    <div style={{"overflow": "auto", "height": "100%"}}>
                        {taskCards}
                    </div>
                    {/* {taskCards} */}
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
                <Col className="d-flex align-items-center" style={{"flexDirection": "column", "height": "column", "borderLeft": "1px solid black"}}>
                    <h5 className="my-2">DONE</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default Board;