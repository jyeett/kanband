import React, { useEffect, useState } from "react";
import {Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import Signup from "./Signup";
import ProjectsHome from "./ProjectsHome";
import Project from "./Project";
import Task from "./Task"
import NavBar from "./NavBar";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [currentUser, setCurrentUser] = useState([])
  const [userProjects, setUserProjects] = useState([])
  const [activeProject, setActiveProject] = useLocalStorage('activeProject', [])
  const [categories, setCategories] = useState([])
  const [activeTask, setActiveTask] = useLocalStorage('activeTask', [])
  const [taskList, setTaskList] = useLocalStorage('taskList', [])

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
    fetch('/categories')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCategories(data)
    })
  }, [])

  const optionList = categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)

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
            setActiveProject={setActiveProject}
            setTaskList={setTaskList} />
        </Route>
        <Route exact path="/project">
          <Project activeProject={activeProject} setActiveTask={setActiveTask} taskList={taskList} setTaskList={setTaskList} />
        </Route>
        <Route exact path="/task">
          <Task activeTask={activeTask} setActiveTask={setActiveTask} optionList={optionList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
