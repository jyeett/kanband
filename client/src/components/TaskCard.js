import React from "react";
import { Card } from "react-bootstrap";

const categoryStyle = {
    "backgroundColor": "lightblue",
    "height": "1.5rem",
    "max-width": "4rem",
    "borderRadius": "15px",
    "fontSize": "12px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
}

function TaskCard({task}) {

    return (
        <Card className="my-1" style={{width: '12rem', height: '7rem'}}>
            <Card.Body>
                <Card.Title style={{"fontSize": "15px"}}>
                    {task.summary}
                </Card.Title>
                <div style={categoryStyle}>
                    {task.category_name}
                </div>
                {/* <p>category</p> */}
            </Card.Body>
        </Card>
    )
}

export default TaskCard;