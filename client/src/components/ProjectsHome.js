import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function ProjectsHome() {
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <h1 className="text-center my-5">YOUR PROJECTS</h1>
                </Col>
            </Row>
            <Row className="proj-btn" style={{"margin-bottom": "35px"}}>
                <Col className="d-flex justify-content-end">
                    <Button>Add Project</Button>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Row>
        </Container>
    )
}

export default ProjectsHome;