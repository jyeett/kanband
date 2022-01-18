import React from "react";
import { Card } from "react-bootstrap";

function TaskCard() {
    return (
        <Card style={{width: '9rem', height: '7rem'}}>
            <Card.Body>
                <Card.Title>
                    Description
                </Card.Title>
                <Card.Footer style={{"background-color": "lightblue", "height": "2rem", "width": "6rem", "border-radius": "15px"}}>
                    Category
                </Card.Footer>
                {/* <p>category</p> */}
            </Card.Body>
        </Card>
    )
}

export default TaskCard;