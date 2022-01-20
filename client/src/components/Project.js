import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import Board from "./Board";

function Project({activeProject}) {
    const [newCollaborator, setNewCollaborator] = useState('')
    const [showCollabForm, setShowCollabForm] = useState(false)
    const [hasUser, setHasUser] = useState(true)

    function handleCloseCollabForm() {
        setShowCollabForm(false)
    }

    function handleShowCollabForm() {
        setShowCollabForm(true)
    }

    function submitUser() {
        fetch("/users")
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => {
                    console.log(data)
                    const userInfo = data.find(userObj => userObj.username === newCollaborator)
                    console.log(userInfo.id)
                    const teamData = {
                        "user_id": userInfo.id,
                        "project_id": activeProject.id
                    }
                    if (userInfo) {
                        fetch("/teams", {
                            method: 'POST',
                            headers: {'Content-Type':'application/json'},
                            body: JSON.stringify(teamData)
                        })
                        .then(res => res.json())
                        .then(data => console.log(data))
                    }
                })
            }
        })
    }

    function handleCollabFormChange(e) {
        setNewCollaborator(e.target.value)
    }

    function handleClose() {
        setShowCollabForm(false)
    }

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <h1 className="text-center my-4">{activeProject.name.toUpperCase()}</h1>
                </Col>
            </Row>
            <Row className="proj-btn" style={{"margin-bottom": "35px"}}>
                <Col className="d-flex justify-content-end">
                    <Button onClick={handleShowCollabForm}>Add Member</Button>
                </Col>
            </Row>
            <Row>
                <Board />
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button className="my-5">Add Task</Button>
                </Col>
            </Row>

            <Modal show={showCollabForm} onHide={handleCloseCollabForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Collaborator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitUser}>
                        <Form.Control type="text" name="username" placeholder="Username" onChange={handleCollabFormChange} value={newCollaborator}/>
                        {hasUser ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a name.</Form.Text>}
                    </Form>                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={submitUser}>
                        Add User
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Project;