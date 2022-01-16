import React, { useEffect, useState } from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      </Switch>
    </div>
  );
}

export default App;
