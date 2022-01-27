import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import Board from "./Board";
import useLocalStorage from "./useLocalStorage";

function Project({activeProject, setActiveTask, taskList, setTaskList}) {
    const [newCollaborator, setNewCollaborator] = useState('')
    const [categories, setCategories] = useState([])
    const [showCollabForm, setShowCollabForm] = useState(false)
    const [showTaskForm, setShowTaskForm] = useState(false)
    const [taskForm, setTaskForm] = useState({
        summary: '',
        details: '',
        progress: 'backlog',
        category_name: '',
        category_id: '',
        project_id: ''
    })
    const [hasUser, setHasUser] = useState(true)
    console.log(taskList)
    const taskCategories = {
        backlog: taskList.filter(task => task.progress === 'backlog'),
        todo: taskList.filter(task => task.progress === 'todo'),
        progress: taskList.filter(task => task.progress === 'progress'),
        review: taskList.filter(task => task.progress === 'review'),
        done: taskList.filter(task => task.progress === 'done')
    }

    useEffect(() => {
        fetch('/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    function handleCloseCollabForm() {
        setShowCollabForm(false)
    }

    function handleShowCollabForm() {
        setShowCollabForm(true)
    }

    function handleCloseTaskForm() {
        setShowTaskForm(false)
    }

    function handleShowTaskForm() {
        setTaskForm({...taskForm, ["project_id"]: activeProject.id})
        setShowTaskForm(true)
    }

    function submitUser(e) {
        e.preventDefault()
        if (newCollaborator === '') {
            setHasUser(false)
        } else {
            setHasUser(true)
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
                            .then(() => {
                                setNewCollaborator('')
                                handleCloseCollabForm()
                            })
                        }
                    })
                }
            })
        }
    }

    function submitTask() {
        fetch("/tasks", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(taskForm)
        })
        .then(res => res.json())
        .then(data => {
            setTaskList([...taskList, data])
            setTaskForm({
                summary: '',
                details: '',
                progress: 'backlog',
                category_name: '',
                category_id: '',
                project_id: ''
            })
            handleCloseTaskForm()
        })
    }

    function handleCollabFormChange(e) {
        setNewCollaborator(e.target.value)
    }

    function handleTaskFormChange(e) {
        if (e.target.name === "category_id") {
            const category = categories.find(cat => cat.id === parseInt(e.target.value));
            setTaskForm({...taskForm, ['category_name']: category.name, [e.target.name]: e.target.value})
        } else {
            setTaskForm({...taskForm, [e.target.name]: e.target.value})
        }
    }

    const optionList = categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <h1 className="text-center my-4">{activeProject.name.toUpperCase()}</h1>
                </Col>
            </Row>
            <Row className="proj-btn" style={{"marginBottom": "35px"}}>
                <Col className="d-flex justify-content-end">
                    <Button onClick={handleShowCollabForm}>Add Member</Button>
                </Col>
            </Row>
            <Row>
                <Board setActiveTask={setActiveTask} optionList={optionList} taskCategories={taskCategories} setTaskList={setTaskList} taskList={taskList} />
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button className="my-4" onClick={handleShowTaskForm}>Add Task</Button>
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
                    <Button variant="secondary" onClick={handleCloseCollabForm}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={submitUser}>
                        Add User
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showTaskForm} onHide={handleCloseTaskForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitTask}>
                        <Form.Text className='invalid-input' >Task Summary</Form.Text>
                        <Form.Control type="text" name="summary" placeholder="Task Summary" onChange={handleTaskFormChange} value={taskForm.summary}/>
                        {hasUser ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a summary.</Form.Text>}
                        <Form.Text className='invalid-input' >Task Details</Form.Text>
                        <Form.Control as="textarea" name="details" placeholder="Task Details" onChange={handleTaskFormChange} value={taskForm.details}/>
                        {/* {hasUser ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a summary.</Form.Text>} */}
                        <Form.Text className='invalid-input' >Task Category</Form.Text>
                        <Form.Select name="category_id" onChange={handleTaskFormChange}>
                            <option>Choose a Category</option>
                            {optionList}
                        </Form.Select>
                        {/* {hasUser ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a summary.</Form.Text>} */}
                    </Form>                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseTaskForm}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={submitTask}>
                        Add Task
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Project;