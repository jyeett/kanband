import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

function ProjectCard({project, handleShowUpdate, deleteHandler, setActiveProject, setTaskList}) {
    const history = useHistory()
    function viewProject() {
        setActiveProject(project)
        setTaskList(project.tasks)
        history.push('/project')
    }

    return (
        <Card className="my-5 mx-3" style={{width: '20rem', height: '15rem'}}>
            <Card.Body className="card-style">
                <Row>
                    <Card.Title className="my-3">{project.name}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Button variant="primary" onClick={viewProject}>View</Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button variant="primary" onClick={() => handleShowUpdate(project.name, project.description, project.id)}>Edit</Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button variant="danger" onClick={() => deleteHandler(project.id)}>Delete</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;