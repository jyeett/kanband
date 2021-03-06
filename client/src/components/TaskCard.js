import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const categoryStyle = {
    "backgroundColor": "lightblue",
    "minHeight": "1.5rem",
    "maxWidth": "4rem",
    "borderRadius": "15px",
    "fontSize": "12px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "marginLeft": "30px"
}

const viewStyle = {
    "height": "1.5rem",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "fontSize": "12px"
}

const deleteStyle = {
    "height": "18px",
    "maxWidth": "5px",
    "position": "absolute",
    "top": "-5px",
    "left": "-5px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "borderRadius": "100%",
    "fontSize": "11px"
}

function TaskCard({task, index, setActiveTask, handleTaskDelete}) {
    const history = useHistory()
    const [showDelete, setShowDelete] = useState(false)

    function handleClick() {
        history.push('/task')
        setActiveTask(task)
    }

    return (
        <Draggable key={String(task.id)} draggableId={String(task.id)} index={index}>
            {(provided, snapshot) => {
                return  (
                    <Card
                        className="my-1"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        // {...provided.dragHandleProps}
                        style={{
                            maxWidth: '12rem',
                            maxHeight: '7rem',
                            minWidth: '12rem',
                            minHeight: '7rem',
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "70%": "100%",
                            boxShadow: snapshot.isDragging ? '' : '3px 3px #434743',
                            color: "black"
                        }}
                        onMouseEnter={() => setShowDelete(true)}
                        onMouseLeave={() => setShowDelete(false)}
                    >
                        {showDelete ? <Button variant="danger" onClick={() => handleTaskDelete(task.id)} style={deleteStyle}>X</Button> : null}
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Row>
                                <Col sm={10}>
                                    <Card.Title style={{"fontSize": "15px"}}>
                                        {task.summary}
                                    </Card.Title>
                                </Col>
                                <Col className="d-flex flex-row-reverse" sm={2}>
                                    <div {...provided.dragHandleProps} style={{"position": "absolute", "top": "5px"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-flex flex-row-reverse">
                                <Col sm={8} className="">
                                    <div style={categoryStyle}>
                                        {task.category_name}
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <Button style={viewStyle} onClick={handleClick}>View</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                )
            }}
        </Draggable>
    )
}

export default TaskCard;