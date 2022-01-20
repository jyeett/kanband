import React, { useEffect, useState } from "react";
import {Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import Signup from "./Signup";
import ProjectsHome from "./ProjectsHome";
import Project from "./Project";
import Task from "./Task"
import NavBar from "./NavBar";

function App() {
  const [currentUser, setCurrentUser] = useState([])
  const [userProjects, setUserProjects] = useState([])
  const [activeProject, setActiveProject] = useState([])

  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then(user => {
          setCurrentUser(user)
          setUserProjects(user?.projects)
          console.log(user)
        })
      }
    })
  }, [])

  function addNewProject(projectObj) {
    setUserProjects([...userProjects, projectObj])
  }

  return (
    <div className="App">
      <NavBar user={currentUser} setCurrentUser={setCurrentUser}/>
      <Switch>
        <Route exact path="/">
          <Login setCurrentUser={setCurrentUser} setUserProjects={setUserProjects} />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/home">
          <ProjectsHome 
            currentUser={currentUser}
            addNewProject={addNewProject}
            userProjects={userProjects}
            setUserProjects={setUserProjects}
            setActiveProject={setActiveProject} />
        </Route>
        <Route exact path="/project">
          <Project activeProject={activeProject} />
        </Route>
        <Route exact path="/task">
          <Task />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
