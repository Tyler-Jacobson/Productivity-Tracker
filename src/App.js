import { Route, Switch } from 'react-router-dom';
import { useState } from "react";

import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  const [ timerRunning, setTimerRunning ] = useState(false);


  return (
    <div className="App">
      <Nav timerRunning={timerRunning}/>
      <Switch>
        <Route exact path="/"  render={(props) => (<Home {...props} timerRunning={timerRunning} setTimerRunning={setTimerRunning} />)}/>
      </Switch>
      
    </div>
  );
}

export default App;

