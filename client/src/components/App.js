import React, { useEffect, useState } from "react";
import {Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import Signup from "./Signup";
import ProjectsHome from "./ProjectsHome";
import Project from "./Project";
import Task from "./Task"

function App() {
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then(user => {
          console.log(user)
        })
      }
    })
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/home">
          <ProjectsHome />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/task">
          <Task />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
