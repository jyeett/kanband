import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Button, Card } from "react-bootstrap";

const categoryStyle = {
    "backgroundColor": "lightblue",
    "minHeight": "1.5rem",
    "maxWidth": "4rem",
    "borderRadius": "15px",
    "fontSize": "12px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
}

function TaskCard({task, index}) {

    return (
        <Draggable key={String(task.id)} draggableId={String(task.id)} index={index}>
            {(provided, snapshot) => {
                return  (
                    <Card
                        className="my-1"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            minWidth: '12rem',
                            minHeight: '7rem',
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "70%": "100%"
                        }}
                    >
                        <Card.Body>
                            <Card.Title style={{"fontSize": "15px"}}>
                                {task.summary}
                            </Card.Title>
                            <div style={categoryStyle}>
                                {task.category_name}
                            </div>
                        </Card.Body>
                    </Card>
                )
            }}
        </Draggable>
    )
}

export default TaskCard;