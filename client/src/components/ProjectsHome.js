import React, { useState } from "react";
import { Button, Col, Container, Row, Modal, Form } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function ProjectsHome({currentUser, addNewProject, userProjects, setUserProjects, setActiveProject, setTaskList}) {
    const [show, setShow] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [hasName, setHasName] = useState(true)
    const [hasDescription, setHasDescription] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        user_id: ''
    })

    const [updateForm, setUpdateForm] = useState({
        name: '',
        description: '',
        user_id: ''
    })
    
    const renderProjects = userProjects.map(project => <ProjectCard
            key={project.id}
            project={project}
            handleShowUpdate={handleShowUpdate}
            deleteHandler={deleteHandler}
            setActiveProject={setActiveProject}
            setTaskList={setTaskList} />)

    function handleShow() {
        setShow(true)
        setFormData({...formData, ["user_id"]: currentUser.id})
    }

    function handleClose() {
        setShow(false)
    }

    function handleShowUpdate(name, description, id) {
        setUpdateForm({
            name: name,
            description: description,
            id: id,
            user_id: currentUser.id
        })
        setShowUpdateForm(true)
    }

    function handleCloseUpdate() {
        setShowUpdateForm(false)
    }

    function changeHandler(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    function changeUpdateHandler(e) {
        setUpdateForm({...updateForm, [e.target.name]: e.target.value})
    }

    function deleteHandler(id) {
        const filteredProjects = userProjects.filter(project => project.id !== id)
        console.log(filteredProjects)
        setUserProjects([...filteredProjects])
        fetch(`/projects/${id}`, {method: "DELETE"})
    }

    function submitHandler(e) {
        e.preventDefault();
        
        if (formData.name.length === 0 || formData.description.length === 0) {
            formData.name === '' ? setHasName(false) : setHasName(true)
            formData.description === '' ? setHasDescription(false) : setHasDescription(true)
            console.log("trying to submit baaaad data ='(");
        } else {            
            console.log('trying to create a new project.');
            console.log(formData)
            const postURL = '/projects';
            const postConfig = {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(formData)
            };
            fetch(postURL, postConfig)
            .then(res => res.json())
            .then(responseProjectObj => {
                addNewProject(responseProjectObj)
                setFormData({
                    name: '',
                    description: '',
                    user_id: ''
                })
                setHasName(true)
                setHasDescription(true)
            });
            handleClose(); 
        }               
    }

    function editHandler() {
        if (updateForm.name !== '' && updateForm.description !== '') {
            const newProjects = userProjects.map(project => {
                if (project.id === updateForm.id) {
                    return {
                        name: updateForm.name,
                        description: updateForm.description,
                        id: updateForm.id,
                        user_id: currentUser.id
                    }
                } else {
                    console.log(project)
                    return project
                }
            })
            console.log(newProjects)
            setUserProjects([...userProjects], newProjects)
            fetch(`/projects/${updateForm.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateForm)
            })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                setTaskList(data.tasks)
                handleCloseUpdate()
            })
        } else {
            console.log("cannot apply changes")
        }
    }

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <h1 className="text-center my-5">YOUR PROJECTS</h1>
                </Col>
            </Row>
            <Row className="proj-btn" style={{"marginBottom": "35px"}}>
                <Col className="d-flex justify-content-end">
                    <Button onClick={handleShow}>Add Project</Button>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                {renderProjects}
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Control type="text" name="name" placeholder="Project Name" onChange={changeHandler} value={formData.name}/>
                        {hasName ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a name.</Form.Text>}
                        <Form.Control type="text" name="description" placeholder="Add a Short Description" onChange={changeHandler} value={formData.description}/>
                        {hasDescription ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a description.</Form.Text>}
                    </Form>                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={submitHandler}>
                        Create Project
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showUpdateForm} onHide={handleCloseUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Your Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={editHandler}>
                        <Form.Text className='invalid-input' >Album Name</Form.Text>
                        <Form.Control type="text" name="name" placeholder="album name" onChange={changeUpdateHandler} value={updateForm.name}/>
                        {updateForm.name !== '' ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a name.</Form.Text>}
                        <Form.Text className='invalid-input' >Description</Form.Text>
                        <Form.Control type="text" name="description" placeholder="description" onChange={changeUpdateHandler} value={updateForm.description}/>
                        {updateForm.description !== '' ? null : <Form.Text className='invalid-input' style={{color: 'red'}} >You must enter a description.</Form.Text>}
                    </Form>                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUpdate}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={editHandler}>
                        Apply Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default ProjectsHome;