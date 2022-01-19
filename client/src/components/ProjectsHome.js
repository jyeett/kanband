import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Modal, Form } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function ProjectsHome({currentUser, addNewProject, userProjects}) {
    const [show, setShow] = useState(false)
    const [hasName, setHasName] = useState(true)
    const [hasDescription, setHasDescription] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        user_id: currentUser.id
    })
    
    const renderProjects = userProjects.map(project => <ProjectCard key={project.id} name={project.name} description={project.description} />)

    function handleShow() {
        setShow(true)
    }

    function handleClose() {
        setShow(false)
    }

    function changeHandler(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    function submitHandler(e) {
        e.preventDefault();
        if (formData.name.length === 0 || formData.description.length === 0) {
            formData.name === '' ? setHasName(false) : setHasName(true)
            formData.description === '' ? setHasDescription(false) : setHasDescription(true)
            console.log("trying to submit baaaad data ='(");
        } else {            
            console.log('trying to create a new project.');
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
                    user_id: currentUser.id
                })
                setHasName(true)
                setHasDescription(true)
            });
            handleClose(); 
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
        </Container>
    )
}

export default ProjectsHome;