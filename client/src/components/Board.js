import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import TaskCard from "./TaskCard";
import { DragDropContext, Droppable} from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const boardStyle = {
    "backgroundColor": "lightgrey",
    "width": "100%",
    "height": "65vh",
    "border": "1px solid black",
    "borderRadius": "15px",
    // "overflow": "hidden"
}

const colStyle = {
    "borderLeft": "1px solid black",
    "borderRight": "1px solid black",
    "height": "60vh",
    "flexDirection": "column"
}

const taskContainer = {
    "padding": "4px",
    "width": "210px",
    "margin-right": "20px",
    "height": "500px",
    "overflowY": "scroll",
    "overflowX": "hidden",
    "scrollbarWidth": "none",
    "display": 'flex',
    "flexDirection": "column",
    "alignItems": "center",
    "borderRadius": "10px"
}

function Board({taskList}) {
    const taskCards = taskList.length > 0 ? taskList.map(task => {
        return <TaskCard key={task.id} task={task}/>
        // return taskList
    }) : null

    // sort tasklist and assign coresponding progress category to items
    const boardColumns = {
        [uuidv4()]: {
            name: "BACKLOG",
            items: taskList
        },
        [uuidv4()]: {
            name: "TO DO",
            items: []
        },
        [uuidv4()]: {
            name: "IN PROGRESS",
            items: []
        },
        [uuidv4()]: {
            name: "IN REVIEW",
            items: []
        },
        [uuidv4()]: {
            name: "DONE",
            items: []
        }
    }
    const [columns, setColumns] = useState(boardColumns)

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;

        const {source, destination} = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId]
            const destColumn = columns[destination.droppableId]
            const sourceItems = [...sourceColumn.items]
            const destItems = [...destColumn.items]
            const [removed] = sourceItems.splice(source.index, 1)
            destItems.splice(destination.index, 0, removed)
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            })
        } else {
            const column = columns[source.droppableId]
            const copiedItems = [...column.items]
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed)
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            })
        }
    }

    return (
        <Container style={boardStyle}>
            {/* <Row>
                <Col className="d-flex align-items-center" style={{"flexDirection": "column", "borderRight": "1px solid black"}}>
                    <h5 className="my-2">BACKLOG</h5>
                    <div style={{"overflow": "auto", "height": "100%"}}>
                        {taskCards}
                    </div>
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
            </Row> */}

            <div style={{"display": "flex", "justifyContent": "center", "height": "100%"}}>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <div key={columnId} style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center"}}>
                                <h2>
                                    {column.name}
                                </h2>
                                <div style={{"margin": "8%"}}>
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    className="board-col"
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        "background": snapshot.isDraggingOver ? "lightblue" : "lightgreen",
                                                        ...taskContainer
                                                    }}
                                                >
                                                    {column.items.map((item, index) => {
                                                        return (
                                                            <TaskCard task={item} index={index} />
                                                            // <Draggable key={String(item.id)} draggableId={String(item.id)} index={index}>
                                                            //     {(provided, snapshot) => {
                                                            //         return (
                                                            //             // <TaskCard
                                                            //             //     task={item}
                                                            //             //     ref={provided.innerRef}
                                                            //             //     {...provided.draggableProps}
                                                            //             //     {...provided.dragHandleProps}
                                                            //             //     style={{
                                                            //             //                 "backgroundColor": snapshot.isDragging ? "#263B4A" : "#456C86",
                                                            //             //                 "color": "white",
                                                            //             //                 ...provided.draggableProps.style
                                                            //             //     }}
                                                            //             // />
                                                            //             <div
                                                            //                 ref={provided.innerRef}
                                                            //                 {...provided.draggableProps}
                                                            //                 {...provided.dragHandleProps}
                                                            //                 style={{"userSelect": "none",
                                                            //                     "padding": "16px",
                                                            //                     "margin": "0 0 8px 0",
                                                            //                     "minHeight": "100px",
                                                            //                     "backgroundColor": snapshot.isDragging ? "#263B4A" : "#456C86",
                                                            //                     "color": "white",
                                                            //                     ...provided.draggableProps.style
                                                            //                 }}
                                                            //             >
                                                            //                 {item.summary}
                                                            //                 {item.category_name}
                                                            //             </div>
                                                            //         )
                                                            //     }}
                                                            // </Draggable>
                                                        )
                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                            )
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                        )
                    })}
                </DragDropContext>
            </div>
        </Container>
    )
}

export default Board;