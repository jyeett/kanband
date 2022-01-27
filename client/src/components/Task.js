import React, { useState } from "react";
import { Button, Container, Row, Modal, Form, Col } from "react-bootstrap"

const detailStyle = {
    "backgroundColor": "#354a38",
    "width": "80vw",
    "height": "40vh",
    "border": "1px solid black",
    "borderRadius": "15px",
    "overflow": "hidden",
    "padding": "15px"
}

function Task({activeTask, setActiveTask, optionList}) {
    const [showTaskform, setShowTaskForm] = useState(false)
    const [hasSummary, setHasSummary] = useState(true)
    const [taskUpdateForm, setTaskUpdateForm] = useState({
        summary: '',
        details: '',
        category_name: '',
        category_id: '',
    })

    function handleCloseTaskForm() {
        setShowTaskForm(false)
    }

    function handleShowTaskForm() {
        setTaskUpdateForm({
            summary: activeTask.summary,
            details: activeTask.details,
            category_name: activeTask.category_name,
            category_id: activeTask.category_id,
        })
        setShowTaskForm(true)
    }

    function changeTaskHandler(e) {
        setTaskUpdateForm({...taskUpdateForm, [e.target.name]: e.target.value})
    }

    function submitTaskUpdate() {
        console.log(activeTask)
        if (taskUpdateForm.summary !== '') {
            setActiveTask({...activeTask, 
                ['summary']: taskUpdateForm.summary,
                ['details']: taskUpdateForm.details
            })
            fetch(`/tasks/${activeTask.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(taskUpdateForm)
            })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                handleCloseTaskForm()
            })
        } else {
            console.log("cannot apply changes")
        }
    }

    return (
        <Container className="task-cont">
            <Row>
                <h3 className="my-4">
                    Task Summary: {activeTask.summary}
                </h3>
            </Row>
            <Row>
                <h4 className="my-4">
                    Category: {activeTask.category_name}
                </h4>
            </Row>
            <Row>
                <h4 className="my-4">Details</h4>
                <Container style={detailStyle}>
                    {activeTask.details}
                </Container>
            </Row>
            <Row>
                <Col className="my-4 d-flex justify-content-end">
                    <Button onClick={handleShowTaskForm} >
                        Edit Task
                    </Button>
                </Col>
            </Row>

            <Modal show={showTaskform} onHide={handleCloseTaskForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Your Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitTaskUpdate}>
                        <Form.Text className='invalid-input' >Task Summary</Form.Text>
                        <Form.Control type="text" name="summary" placeholder="Task Summary" onChange={changeTaskHandler} value={taskUpdateForm.summary}/>
                        {hasSummary ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a summary.</Form.Text>}
                        <Form.Text className='invalid-input' >Task Details</Form.Text>
                        <Form.Control as="textarea" name="details" placeholder="Task Details" onChange={changeTaskHandler} value={taskUpdateForm.details}/>
                        <Form.Text className='invalid-input' >Task Category</Form.Text>
                        <Form.Select name="category_id" onChange={changeTaskHandler}>
                            <option>Choose a Category</option>
                            {optionList}
                        </Form.Select>
                    </Form>                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseTaskForm}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={submitTaskUpdate}>
                        Apply Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Task;