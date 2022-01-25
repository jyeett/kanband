import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import TaskCard from "./TaskCard";
import { DragDropContext, Droppable} from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

const boardStyle = {
    "backgroundColor": "#354a38",
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
    "marginRight": "10px",
    "marginLeft": "10px",
    "height": "500px",
    "overflowY": "scroll",
    "overflowX": "hidden",
    "scrollbarWidth": "none",
    "display": 'flex',
    "flexDirection": "column",
    "alignItems": "center",
    "borderRadius": "10px"
}

function Board({setActiveTask, taskCategories, setTaskList, taskList}) {
    console.log(taskCategories.backlog)
    const boardColumns = {
        [uuidv4()]: {
            name: "BACKLOG",
            items: taskCategories.backlog
        },
        [uuidv4()]: {
            name: "TO DO",
            items: taskCategories.todo
        },
        [uuidv4()]: {
            name: "IN PROGRESS",
            items: taskCategories.progress
        },
        [uuidv4()]: {
            name: "IN REVIEW",
            items: taskCategories.review
        },
        [uuidv4()]: {
            name: "DONE",
            items: taskCategories.todo
        }
    }
    const [columns, setColumns] = useState(boardColumns)
    
    useEffect(() => {
        setColumns(boardColumns)
    }, [taskCategories])

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

    function handleTaskDelete(id) {
        console.log(id)
        const updatedList = taskList.filter(task => task.id !== id)
        setTaskList(updatedList)
        fetch(`/tasks/${id}`, {method: 'DELETE'})
    }

    return (
        <Container style={boardStyle}>
            <div style={{"display": "flex", "justifyContent": "center", "height": "100%"}}>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <div key={columnId} style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "textAlign": "center"}}>
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
                                                        "background": snapshot.isDraggingOver ? "lightblue" : "#567a5b",
                                                        ...taskContainer
                                                    }}
                                                >
                                                    {column.items.map((item, index) => {
                                                        return (
                                                            <TaskCard task={item} index={index} setActiveTask={setActiveTask} handleTaskDelete={handleTaskDelete} />
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